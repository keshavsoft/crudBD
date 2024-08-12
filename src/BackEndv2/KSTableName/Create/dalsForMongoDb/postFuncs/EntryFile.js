import { StartFunc as StartFuncwriteFile } from '../../forMongoDb/writeToCollection/insert.js';

let PostFunc = (inPostBody) => {
    return StartFuncwriteFile(inPostBody);
};

export {
    PostFunc
};