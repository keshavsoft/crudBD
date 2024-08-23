import { StartFunc as StartFuncUpdateRow } from '../../kLowDb/WriteFile/Update/UpdateRow/EntryFile.js';
import { StartFunc as StartFuncUpdateRowValue } from '../../kLowDb/WriteFile/Update/UpdateRowValue/EntryFile.js';
import { StartFunc as StartFuncWriteTofile } from '../../kLowDb/WriteTofile/Update/UpdateRowFromBody/EntryFile.js';
import { StartFunc as StartFuncRowPutToInArray } from '../../kLowDb/WriteFile/Update/UpdateRowPutToInArray/EntryFile.js';

let PutFunc = ({ inDataToUpdate, inId }) => {
    return StartFuncUpdateRow({ inDataToUpdate, inId });
};

let PutToValueFunc = ({ inDataToUpdate, inId, inKeyName }) => {
    return StartFuncUpdateRowValue({ inDataToUpdate, inId, inKeyName });
};

let PutFromBodyFunc = ({ inDataToUpdate, inId }) => {
    return StartFuncWriteTofile({ inDataToUpdate, inId });
};

let PutToValueInArrayFunc = ({ inDataToUpdate, inId, inKeyName }) => {
    return StartFuncRowPutToInArray({ inDataToUpdate, inId, inKeyName });
};

export {
    PutFunc, PutToValueFunc, PutFromBodyFunc, PutToValueInArrayFunc
};