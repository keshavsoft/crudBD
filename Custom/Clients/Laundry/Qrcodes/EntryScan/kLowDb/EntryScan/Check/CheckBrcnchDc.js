import { StartFunc as StartFuncCommonFuncs } from '../../CommonFuncs/BranchDc.js';

const StartFunc = ({ inDc }) => {
    let LocalDc = inDc;

    let LocalReturnData = { KTF: false };
    const dbForQrCodes = StartFuncCommonFuncs();

    let LocalRowNeeded = dbForQrCodes.JsonData.find(e => e.pk == LocalDc);

    if (LocalRowNeeded === undefined) {
        LocalReturnData.KReason = `No Dc :${LocalDc}`
        return LocalReturnData;
    };
    LocalReturnData.KTF = true;
    return LocalReturnData;
};
export { StartFunc };