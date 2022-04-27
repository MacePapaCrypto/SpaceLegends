import { ethers } from "ethers";
import * as oldABI from "./oldABI.json";
import * as newABI from "./newABI.json";

async function getIdsAndAddresses() {
    console.log("Starting address gathering");
    const provider = new ethers.providers.JsonRpcProvider("https://rpcapi-tracing.fantom.network");
    await provider.ready;
    //console.log(provider);
    const OldContract = new ethers.Contract("0xAA57EFDa5070F114f5Ed45f463AC6073A668e5dD", oldABI, provider);
    const NewContract = new ethers.Contract("0xaB496610a72e96794A47146c809902DF339978a9", newABI, provider);
    //console.log(OldContract);
    //const oldc = await OldContract.attach("0xAA57EFDa5070F114f5Ed45f463AC6073A668e5dD");
    //console.log(oldc);
    console.log("Should be connected to stuff");
    let tokenId: number = 0;
    let userAddress: string = "";
    let addressMap: Array<string> = [];
    let tokenIdMap: Array<number> = [];
    for(let i = 1; i <= 375; i++) {
        tokenId = i;
        userAddress = await OldContract.ownerOf(tokenId);
        //console.log("User Address: ", userAddress);
        addressMap[i] = userAddress;
        tokenIdMap[i] = tokenId;
    }
    for(let i = 376; i <= 750; i++) {
        tokenId = i;
        try {
            userAddress = await NewContract.ownerOf(tokenId);
            addressMap[i] = userAddress;
            tokenIdMap[i] = tokenId;
        } catch(error) {
            addressMap[i] = "0x0000000000000000000000000000000000000000";
            tokenIdMap[i] = tokenId;
        }
    }
    //console.log(addressMap);
    //console.log(tokenIdMap);
    for(let i = 0; i < 30; i++) {
        console.log(addressMap.slice(i*25 + 1, i*25 + 26));
        console.log(tokenIdMap.slice(i*25 + 1, i*25 + 26));
    }
}

getIdsAndAddresses();