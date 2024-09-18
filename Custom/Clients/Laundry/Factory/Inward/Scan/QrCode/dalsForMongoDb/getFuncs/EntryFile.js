import { StartFunc as StartFuncreadFile } from '../../forMongoDb/readFile/readFile.js';
import { StartFunc as lastRow } from '../../forMongoDb/readFile/lastRow.js';

let GetFunc = async () => {
    let LocalFromLowDb = await StartFuncreadFile();

    return await LocalFromLowDb;
};

let GetDataOnlyFunc = async () => {
    let LocalFromLowDb = await StartFuncreadFile();

    return await LocalFromLowDb;
};

let GetLastRowFunc = async () => {
    let LocalFromLowDb = await lastRow();

    return LocalFromLowDb;
};

export {
    GetFunc, GetDataOnlyFunc, GetLastRowFunc
};