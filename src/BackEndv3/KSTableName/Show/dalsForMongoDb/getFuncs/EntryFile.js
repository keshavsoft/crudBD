import { StartFunc as StartFuncreadFile } from '../../forMongoDb/readFile/readFile.js';
import { StartFunc as lastRow } from '../../forMongoDb/readFile/lastRow.js';

let GetFunc = () => {
    return StartFuncreadFile();
};

let GetDataOnlyFunc = async () => {
    let LocalFromLowDb = await StartFuncreadFile();

    return LocalFromLowDb;
};

let GetLastRowFuncRepo = async () => {
    let LocalFromLowDb = await lastRow();

    return LocalFromLowDb;
};

export {
    GetFunc, GetDataOnlyFunc, GetLastRowFuncRepo
};