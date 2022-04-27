import * as fs from 'fs';
//import * as IPFS from 'ipfs-core';
import * as IPFS from 'ipfs-http-client';
const basePath = process.cwd();

async function getJsonAndImage() {
    const imageIpfsPath: any = "QmSKkAK7X3nbDBEh84r1WLLhFR9RkUjqPHSoXcWSVdYwUz";
        //BaseURI to concatenate with image CID to add to json file
        const baseURI: string = "https://ipfs.io/ipfs/"
        let imageURI = new Array<string>(3000);
        let cid: any;
        const ipfs = await IPFS.create();
        console.log(ipfs);
        for await(const file of ipfs.ls(imageIpfsPath)) {
            console.log(file);
        }
}

async function getNftImageUri() {
    console.log("Getting First CID");
    let i: number = 0;
    let index: string = '';
    let indexTemp: Array<string> = [];
    let indexInt: number;
    //let inputAddr: URL = new URL('http://127.0.0.1:8080');
    //Image folder path - concatenate "/number.png" for individual image
    const imageIpfsPath: any = "QmPUyo5A5hNur2SS5Yfj2yvdWoRoRCSbQ3PxX4dG9ivwPL";
    //BaseURI to concatenate with image CID to add to json file
    const baseURI: string = "https://ipfs.io/ipfs/"
    let imageURI = new Array<string>(3000);
    let cid: any;
    const ipfs = IPFS.create();
    //ipfs.pubsub.setMaxListener(0);
    //Get the CID of each image and store the final URI in the imageURI array
    for await(const file of ipfs.ls(imageIpfsPath)) {
        cid = file.cid.toString();
        index = file.name;
        indexTemp = index.split('.');
        index = indexTemp[0];
        console.log(index);
        indexInt = parseInt(index, 10);
        imageURI[indexInt-1] = baseURI + cid;
        console.log("CID " + indexInt + ": " + imageURI[indexInt-1]);
    }
    return imageURI;
}

function grabName(index: number) {
    let pussyName: string = "";
    let rawdata: any;
    const textPath: string = "PopPop/0xcinn-poppussies-poppop.txt";
    let realIndex: number = index - 1;
    let nameArray: Array<string>;
    rawdata = fs.readFileSync(textPath, 'utf8');
    nameArray = rawdata.split("\n");
    console.log(nameArray[realIndex]);
    pussyName = nameArray[realIndex];
    return pussyName;
}


async function updateNftJson() {

    let rawdata: any;
    let data: any;
    const baseJsonPath: string = "test/";
    let jsonInPath: string = "";
    let jsonOutPath: string = "";
    let pussyName: string = "";
    let pussySubClan: string = "";
    let pussyClan: string = "";

    for(let i = 1; i <= 3333; i ++) {
        //console.log("Loop: " + i);
        jsonInPath = baseJsonPath + i + '.json';
        console.log(jsonInPath);
        rawdata = fs.readFileSync(jsonInPath);
        data = JSON.parse(rawdata);
        try {
            //data.description = "Pop Skullys are a group of pop icons taking the cult from the underground to the mainstream. They subliminally push the cult's influence through their art.";
            data.image = "https://gateway.pinata.cloud/ipfs/QmeDHCCKorH241XsxPRmbNShYxkgh5o5UQcHtS3wxYBnH9/" + i + ".png";
            //data.edition = i;
            fs.writeFileSync(
                `test/${data.edition}.json`,
                JSON.stringify(data, null, 2)
            );
        } catch(error) {
            console.log(error);
        }
    }


}

updateNftJson();
//getJsonAndImage();