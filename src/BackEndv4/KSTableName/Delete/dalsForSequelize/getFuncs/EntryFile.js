import { StartFunc as StartFuncreadFile } from '../../kSequelize/ReadFileList/readFile.js';

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