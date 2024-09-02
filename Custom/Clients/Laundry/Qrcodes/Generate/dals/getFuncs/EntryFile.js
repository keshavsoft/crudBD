import { StartFunc as StartFunReadFileById } from '../../kLowDb/CommonFuncs/GenerateQrCodes.js';

let GetIdFunc = ({ inBranch, inId }) => {
    let LocalFromLowDb = StartFunReadFileById({ inBranch, inId });

    return LocalFromLowDb;
};

export { GetIdFunc };