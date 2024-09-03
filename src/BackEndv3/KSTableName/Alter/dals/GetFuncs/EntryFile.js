import { StartFunc as StartFuncUpdateRow } from '../../kLowDb/WriteFile/Update/UpdateKey/EntryFile.js';

let GetFunc = ({ inId, inKey, inValue }) => {
    return StartFuncUpdateRow({ inId, inKey, inValue });
};

let GetReturnHtmlFunc = ({ inId, inKey, inValue }) => {
    return StartFuncUpdateRow({ inId, inKey, inValue });
};

export {
    GetFunc, GetReturnHtmlFunc
};