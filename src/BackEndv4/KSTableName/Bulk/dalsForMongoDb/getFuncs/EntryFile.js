import { StartFunc as StartFuncwriteFile } from '../../forMongoDb/writeToCollection/insert.js';

let GetFunc = (inPostBody) => {
    return StartFuncwriteFile(inPostBody);
};

export {
    GetFunc
};