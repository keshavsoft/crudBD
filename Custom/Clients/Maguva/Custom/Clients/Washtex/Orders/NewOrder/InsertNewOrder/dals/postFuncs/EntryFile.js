import { StartFunc as StartFuncWriteTofile } from '../../kLowDb/WriteTofile/AsIs.js';

let postFunc = ({ inBranchName, inPostBody }) => {
    let LocalFromLowDb = StartFuncWriteTofile({
        inDataToInsert: inPostBody,
        inFileName: inBranchName,
    });

    if (LocalFromLowDb === false) {
        return false;
    };

    return LocalFromLowDb;
};

export { postFunc };