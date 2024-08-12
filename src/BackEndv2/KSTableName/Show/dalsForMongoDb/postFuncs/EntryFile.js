import { StartFunc as StartFuncReadFileFromModal } from '../../kLowDb/ReadFileList/readFileFromModal.js';

import { StartFunc as StartFuncwriteFile } from '../../forMongoDb/writeToCollection/insert.js';
import { StartFunc as StartFuncImportToFile } from '../../kSequelize/WriteFileList/ImportToFile.js';

// import { StartFunc as StartFuncwriteFile } from '../../kLowDb/WriteFileList/writeFile.js';

// import { StartFunc as StartFuncWriteFileFromModal } from '../../kLowDb/WriteFileList/writeFileFromModal.js';
// import { StartFunc as StartFuncImportToFile } from '../../kLowDb/WriteFileList/ImportToFile.js';
// import { StartFunc as StartFuncUploadToFile } from '../../kLowDb/WriteFileList/UploadToFile.js';

let PostFunc = (inPostBody) => {
    return StartFuncwriteFile(inPostBody);
};

let PostFromModalFunc = ({ LocalBodyAsModal }) => {
    return StartFuncWriteFileFromModal({ LocalBodyAsModal });
};

let PostUploadFunc = ({ LocalBodyAsModal }) => {
    return StartFuncImportToFile({ LocalBodyAsModal });
};

let PostUploadFromModalFunc = async (inPostBody) => {
    return await StartFuncImportToFile(inPostBody);
};

let PostGetSelectColumnsFunc = ({ LocalBodyAsModal }) => {
    return StartFuncReadFileFromModal();
};

export {
    PostFunc, PostFromModalFunc,
    PostUploadFunc, PostGetSelectColumnsFunc, PostUploadFromModalFunc
};