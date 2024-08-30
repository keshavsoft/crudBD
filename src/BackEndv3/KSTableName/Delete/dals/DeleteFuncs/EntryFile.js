import { StartFunc as StartFuncwriteFile } from '../../kLowDb/DeleteFromFile/DeleteRow.js';

let DeleteFunc = ({ inId }) => {
    return StartFuncwriteFile({ inId });
};
let ReferenceCheckFunc = ({ inId }) => {
    return StartFuncwriteFile({ inId });
};

export { DeleteFunc, ReferenceCheckFunc};