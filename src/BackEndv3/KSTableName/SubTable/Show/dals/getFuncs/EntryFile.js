import { StartFunc as ReadFromFile } from '../../kLowDb/ReadFromFile/getFunc.js';

let GetFunc = () => {
    let LocalFromLowDb = ReadFromFile();

    if (LocalFromLowDb.KTF === false) {
        return false;
    };

    return LocalFromLowDb;
};

export {
    GetFunc
};