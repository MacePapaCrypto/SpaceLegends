// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./ERC2981.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol";
import '@uniswap/v2-core/contracts/interfaces/IUniswapV2Pair.sol';
import "./IWrappedFantom.sol";

/* Custom Error Section - Use with ethers.js for custom errors */
// Public Mint is Paused
error MintPaused();

//Not whitelisted for early mint
error NotWhitelisted();

// Cannot mint zero NFTs
error AmountLessThanOne();

// Cannot mint more than maxMintAmount
error AmountOverMax(uint256 amtMint, uint256 maxMint);

// Token not in Auth List
error TokenNotAuthorized();

// Not enough mints left for mint amount
error NotEnoughMintsLeft(uint256 supplyLeft, uint256 amtMint);

// Not enough ftm sent to mint
error InsufficientFTM(uint256 totalCost, uint256 amtFTM);

contract SpaceLegends is ERC721Enumerable, Ownable, ERC2981 {
  using Strings for uint256;

  string baseURI;
  string public baseExtension = ".json";

  address public lpPair; // = 0x2b4C76d0dc16BE1C31D4C1DC53bF9B45987Fc75c; - usdcftm pair
  IWrappedFantom wftm = IWrappedFantom(0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83);
  //Team wallets
  address[] private team = [

  ];
  mapping(address => uint) public whitelistedAddresses;

  //@audit cost too low?
  mapping(address => uint) public acceptedCurrencies;

  uint256 public immutable maxSupply; //2500
  uint256 public immutable maxMintAmount; //5

  bool public publicPaused = true;
  bool public whitelistPaused = true;
  uint16[2500] private ids;
  uint16 private index = 0;

  constructor(
    string memory _name,
    string memory _symbol,
    string memory _initBaseURI, //""
    address _lpPair,
    address _royaltyAddress,
    uint _royaltiesPercentage,
    uint _maxSupply,
    uint _maxMintAmount
  ) ERC721(_name, _symbol) {
        maxSupply = _maxSupply;
        maxMintAmount = _maxMintAmount;
        lpPair = _lpPair; 
        _setReceiver(_royaltyAddress);
        setBaseURI(_initBaseURI);
        _setRoyaltyPercentage(_royaltiesPercentage);
  }

  //address oath = 0x21Ada0D2aC28C3A5Fa3cD2eE30882dA8812279B6;
  //address wftm = 0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83;
  function addCurrency(address[] calldata acceptedCurrenciesInput, uint256[] calldata prices) external onlyOwner {
    require(acceptedCurrenciesInput.length == prices.length, "improper length");
    uint len = prices.length;
    for(uint i; i < len; ++i) {
        if (acceptedCurrenciesInput[i] == address(wftm)) {
            acceptedCurrencies[address(0)] = prices[i];
        }
        acceptedCurrencies[acceptedCurrenciesInput[i]] = prices[i];
    }
  }

  // internal
  function _baseURI() internal view virtual override returns (string memory) {
    return baseURI;
  }

  function _pickRandomUniqueId(uint256 _random) private returns (uint256 id) {
      uint256 len = ids.length - index++;
      require(len > 0, "no ids left");
      uint256 randomIndex = _random % len;
      id = ids[randomIndex] != 0 ? ids[randomIndex] : randomIndex;
      ids[randomIndex] = uint16(ids[len - 1] == 0 ? len - 1 : ids[len - 1]);
      ids[len - 1] = 0;
  }

  function mint(address token, uint amount) external payable {
    //mint is closed
    if(publicPaused && whitelistPaused)
      revert MintPaused();
    //whitelist is open, public closed
    if(publicPaused && !whitelistPaused) {
      //Check if they are on the whitelist and can mint before public
      if(whitelistedAddresses[msg.sender] == 0)
        revert NotWhitelisted();
    }
    //Are there any other possible circumstances? If public is open, whitelist check doesnt matter
    if(amount <= 0)
      revert AmountLessThanOne();
    //require(amount > 0, 'Cannot mint 0');
    if(amount > maxMintAmount) {
      revert AmountOverMax({
        amtMint: amount,
        maxMint: maxMintAmount
      });
    }
    //require(amount <= maxMintAmount, 'Amount to mint larger than max allowed');
    if(acceptedCurrencies[token] <= 0)
      revert TokenNotAuthorized();
    //require(acceptedCurrencies[token] > 0, "token not authorized");

    uint256 supply = totalSupply();
    if(supply + amount > maxSupply) {
      revert NotEnoughMintsLeft({
        supplyLeft: maxSupply - supply,
        amtMint: amount
      });
    }
    //require(supply + amount <= maxSupply, 'Not enough mints left');

    uint amountFromSender = msg.value;
    if (token == address(0)) {
        if(amountFromSender != amount * acceptedCurrencies[address(wftm)])
          revert InsufficientFTM({
            totalCost: amount * acceptedCurrencies[address(wftm)],
            amtFTM: amountFromSender
          });
        //require(msg.value == amount * acceptedCurrencies[address(wftm)], "insufficient ftm");
        wftm.deposit{ value: amountFromSender }();
        _mintInternal(amount);
    } else {
        require(IERC20(token).transferFrom(msg.sender, address(this), amount * acceptedCurrencies[token]), "Payment not successful");
        _mintInternal(amount);
    }
  }

    function _mintInternal(uint _amount) internal {
        for (uint256 i = 1; i <= _amount; ++i) {
            _safeMint(msg.sender, _pickRandomUniqueId(_getRandom()) +1);
        }
    }

    function _getRandom() internal returns (uint) {
       (uint token0, uint token1) = _getRandomNumbers();
        return uint(keccak256(abi.encodePacked(
            token0, token1
        )));
    }

    function _getRandomNumbers() internal returns (uint, uint) {
        (uint token0, uint token1,) = IUniswapV2Pair(lpPair).getReserves();
        return (token0, token1);
    }

  function walletOfOwner(address _owner)
    public
    view
    returns (uint256[] memory)
  {
    uint256 ownerTokenCount = balanceOf(_owner);
    uint256[] memory tokenIds = new uint256[](ownerTokenCount);
    for (uint256 i; i < ownerTokenCount; i++) {
      tokenIds[i] = tokenOfOwnerByIndex(_owner, i);
    }
    return tokenIds;
  }

  function tokenURI(uint256 tokenId)
    public
    view
    virtual
    override
    returns (string memory)
  {
    require(
      _exists(tokenId),
      "ERC721Metadata: URI query for nonexistent token"
    );

    string memory currentBaseURI = _baseURI();
    return bytes(currentBaseURI).length > 0
        ? string(abi.encodePacked(currentBaseURI, tokenId.toString(), baseExtension))
        : "";
  }

  function setWhitelist(address[] calldata _whitelistArray) public onlyOwner {
    uint len = _whitelistArray.length;
    for(uint i = 0; i < len; i++) {
      whitelistedAddresses[_whitelistArray[i]] = 1;
    }
  }

  function setBaseURI(string memory _newBaseURI) public onlyOwner {
    baseURI = _newBaseURI;
  }

  function setBaseExtension(string memory _newBaseExtension) public onlyOwner {
    baseExtension = _newBaseExtension;
  }

  function pausePublic(bool _state) public onlyOwner {
    publicPaused = _state;
  }

  function pauseWhitelist(bool _state) public onlyOwner {
    whitelistPaused = _state;
  }

  function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721Enumerable, IERC165, ERC165Storage) returns (bool) {
    return super.supportsInterface(interfaceId);
  }

  function withdraw(address token) external onlyOwner {
    require(acceptedCurrencies[token] > 0, "token not authorized");
    uint amount = IERC20(token).balanceOf(address(this));
    require(amount > 0);
    //Fix when shares between team is determined
    /*IERC20(token).transfer(team[0], amount * 30 / 100);
    IERC20(token).transfer(team[1], amount * 60 / 100);
    IERC20(token).transfer(team[2], amount * 10 / 100);*/
  }
}