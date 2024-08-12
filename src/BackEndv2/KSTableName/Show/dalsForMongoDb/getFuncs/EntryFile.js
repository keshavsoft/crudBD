import { StartFunc as StartFuncreadFile } from '../../forMongoDb/readFile/readFile.js';

let GetFunc = () => {
    return StartFuncreadFile();
};

let GetDataOnlyFunc = async () => {
    let LocalFromLowDb = await StartFuncreadFile();

    if (LocalFromLowDb.KTF === false) {
        return LocalFromLowDb;
    };

    return LocalFromLowDb;
};

export {
    GetFunc, GetDataOnlyFunc
};