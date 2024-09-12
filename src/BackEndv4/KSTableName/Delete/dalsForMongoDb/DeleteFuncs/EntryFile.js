import { StartFunc as StartFuncDeleteFile } from '../../forMongoDb/deleteFile/delete.js';

let DeleteFunc = ({ inId }) => {
    return StartFuncDeleteFile({ inId });
};

export { DeleteFunc };