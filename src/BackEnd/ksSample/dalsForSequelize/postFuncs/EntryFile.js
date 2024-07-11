import { StartFunc as StartFuncReadFileFromModal } from '../../kLowDb/ReadFileList/readFileFromModal.js';

import { StartFunc as bulkInsertAsIs } from '../../kSequelize/WriteToFile/bulkInsertAsIs.js';

import { StartFunc as StartFuncImportToFile } from '../../kSequelize/WriteFileList/ImportToFile.js';
import { StartFunc as StartFuncInsertRow } from "../../kSequelize/WriteToFile/InsertRow.js";


let PostFunc = (inPostBody) => {
    return StartFuncInsertRow(inPostBody);
};

let PostFromModalFunc = ({ LocalBodyAsModal }) => {
    return StartFuncWriteFileFromModal({ LocalBodyAsModal });
};

let PostUploadFunc = ({ LocalBodyAsModal }) => {
    return bulkInsertAsIs({ LocalBodyAsModal });
};

let MultiInsertWithCheckFunc = async (inPostBody) => {
    return await bulkInsertAsIs(inPostBody);
};

let PostUploadFromModalFunc = async (inPostBody) => {
    return await StartFuncImportToFile(inPostBody);
};

let PostGetSelectColumnsFunc = ({ LocalBodyAsModal }) => {
    return StartFuncReadFileFromModal();
};

export {
    PostFunc, PostFromModalFunc,
    PostUploadFunc, PostGetSelectColumnsFunc, PostUploadFromModalFunc,
    MultiInsertWithCheckFunc
};