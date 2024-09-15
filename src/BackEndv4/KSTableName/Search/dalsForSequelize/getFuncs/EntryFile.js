import { StartFunc as StartFuncreadFile } from '../../kSequelize/ReadFileList/readFile.js';

let GetFunc = async () => {
    let LocalFromLowDb = await StartFuncreadFile();

    return LocalFromLowDb;
};

let GetDataOnlyFunc = async () => {
    let LocalFromLowDb = await StartFuncreadFile();

    return LocalFromLowDb;
};

export {
    GetFunc, GetDataOnlyFunc
};