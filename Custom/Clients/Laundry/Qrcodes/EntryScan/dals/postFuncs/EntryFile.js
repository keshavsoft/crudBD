//import { StartFunc as EntryScan } from '../../kLowDb/EntryScan/QrCode.js';

let PostFunc = ({ inBranch, inPostBody }) => {
    console.log("inBranch :", inBranch);
    console.log("inPostBody:", inPostBody);

    //let LocalFromLowDb = Generate({ inBranch, inPostBody });

    return LocalFromLowDb;
};

export { PostFunc };