import { StartFunc as StartFunReadFileById } from '../../kLowDb/CommonFuncs/GenerateQrCodes.js';

let GetIdFunc = ({ inId }) => {
    let LocalFromLowDb = StartFunReadFileById({ inId });

    return LocalFromLowDb;
};

export { GetIdFunc };