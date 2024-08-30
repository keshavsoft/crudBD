import { StartFunc as ReadFromFile } from '../../kLowDb/ReadFromFile/getFunc.js';

let GetKeyNameFunc = () => {
    let LocalFromLowDb = ReadFromFile();
    
    if (LocalFromLowDb.KTF === false) {
        return false;
    };

    return LocalFromLowDb;
};

export {
    GetKeyNameFunc
};