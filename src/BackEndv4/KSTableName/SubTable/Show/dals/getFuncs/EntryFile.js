import { StartFunc as ReadFromFile } from '../../kLowDb/ReadFromFile/getFunc.js';

let GetKeyNameFunc = ({ inId, inKey }) => {
    console.log("inId",inId);
    console.log("inKey",inKey);
    
    let LocalFromLowDb = ReadFromFile({ inId, inKey });

    if (LocalFromLowDb.KTF === false) {
        return false;
    };

    return LocalFromLowDb;
};

export {
    GetKeyNameFunc
};