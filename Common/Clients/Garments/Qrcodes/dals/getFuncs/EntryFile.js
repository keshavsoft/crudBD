import { StartFunc as StartFunReadFileById } from '../../kLowDb/CommonFuncs/GenerateQrCodes.js';
import { StartFunc as StartFunGenerateQrWithTable } from '../../kLowDb/CommonFuncs/GenerateQrWithTable/GenerateQrWithTable.js';

let GetIdFunc = ({ inId }) => {
    let LocalFromLowDb = StartFunReadFileById({ inId });

    if (LocalFromLowDb === false) {
        return false;
    };

    return LocalFromLowDb;
};

let GetIdWithTableFunc = ({ inTable, inId }) => {
    let LocalFromLowDb = StartFunGenerateQrWithTable({ inTable, inId });

    if (LocalFromLowDb === false) {
        return false;
    };

    return LocalFromLowDb;
};


export { GetIdFunc, GetIdWithTableFunc };