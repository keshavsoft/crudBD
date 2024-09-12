import { StartFunc as StartFuncwriteFile } from '../../kLowDb/WriteFileList/DeleteFile.js';
import { StartFunc as StartFuncDeleteFile } from '../../forMongoDb/deleteFile/delete.js';

let DeleteFunc = ({ inId }) => {
    return StartFuncDeleteFile({ inId });
};

export { DeleteFunc };