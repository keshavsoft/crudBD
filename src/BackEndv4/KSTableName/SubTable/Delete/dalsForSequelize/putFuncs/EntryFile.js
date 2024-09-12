import { StartFunc as StartFuncwriteFile } from '../../kSequelize/UpdateTableRow/AllColumns.js';

let PutFunc = ({ inDataToUpdate, inId }) => {
    return StartFuncwriteFile({ inDataToUpdate, inId });
};

export {
    PutFunc
};