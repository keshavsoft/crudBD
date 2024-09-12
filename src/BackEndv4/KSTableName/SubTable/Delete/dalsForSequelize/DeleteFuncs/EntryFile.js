import { StartFunc as StartFuncDeleteFile } from '../../kSequelize/WriteFileList/DeleteRow.js';

let DeleteFunc = ({ inId }) => {
    return StartFuncDeleteFile({ inId });
};

export { DeleteFunc };