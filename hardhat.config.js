require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: "0.8.13",
  defaultNetwork: "ftmtest",
  networks: {
    hardhat: {},
    ftmmain: {
      url: "https://rpcapi-tracing.fantom.network",
      chainId: 250,
      accounts: ["d3b278864c626d7f4cdeb8484330bc62c4f781c110dcb80c2b5bae8dd9d9281d"]
    },
    ftmtest: {
      url: "https://xapi.testnet.fantom.network/lachesis",
      chainId: 0xfa2,
      accounts: ["d3b278864c626d7f4cdeb8484330bc62c4f781c110dcb80c2b5bae8dd9d9281d"]
    }
  },
  etherscan: {
    apiKey: "YQ8HA38WVNY8P49EF2DU2H7QIQCITQ4TGW"
  }
};
