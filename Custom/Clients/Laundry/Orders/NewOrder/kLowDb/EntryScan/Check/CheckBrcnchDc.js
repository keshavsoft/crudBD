import { StartFunc as StartFuncCommonFuncs } from '../../CommonFuncs/BranchDc.js';

const StartFunc = ({ inTable, inDc }) => {
    let LocalBranchName = inTable;
    let LocalDc = inDc;

    let LocalReturnData = { KTF: false };
    const dbForQrCodes = StartFuncCommonFuncs();
    // dbForQrCodes.JsonData;

    let LocalRowNeeded = dbForQrCodes.JsonData.find(e => e.pk == LocalDc);

    if (LocalRowNeeded === undefined) {
        LocalReturnData.KReason = `No Dc :${LocalDc}`
        return LocalReturnData;
    };
    LocalReturnData.KTF = true;
    return LocalReturnData;
};
export { StartFunc };