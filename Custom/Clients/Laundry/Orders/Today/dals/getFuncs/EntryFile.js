import { StartFunc as StartFunReadFileById } from '../../kLowDb/CommonFuncs/GenerateQrCodes.js';

let GetWithQrCodesFunc = ({ inBranch }) => {
    let LocalFromLowDb = StartFunReadFileById({ inBranch });

    return LocalFromLowDb;
};

export { GetWithQrCodesFunc };