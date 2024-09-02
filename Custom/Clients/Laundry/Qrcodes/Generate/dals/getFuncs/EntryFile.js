import { StartFunc as Generate } from '../../kLowDb/Generate/QrCode.js';

let GetIdFunc = ({ inBranch, inId }) => {
    console.log("inBranch, inId :",inBranch, inId );
    
    let LocalFromLowDb = Generate({ inBranch, inId });

    return LocalFromLowDb;
};

export { GetIdFunc };