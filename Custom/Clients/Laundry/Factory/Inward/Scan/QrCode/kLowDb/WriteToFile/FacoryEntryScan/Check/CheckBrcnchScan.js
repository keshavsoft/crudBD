import { StartFunc as StartFuncCommonFuncs } from '../../../CommonFuncs/BranchScan.js';

const StartFunc = ({ inTable, inDc, inQrCodeId }) => {
    let LocalFactoryName = inTable;
    let LocalDc = inDc;
    let LocalQrCodeId = inQrCodeId;

    let LocalReturnData = { KTF: false };
    const dbForQrCodes = StartFuncCommonFuncs();
    dbForQrCodes.read();
    dbForQrCodes.JsonData = dbForQrCodes.data;
    // dbForQrCodes.JsonData;

    let LocalQrCheck = dbForQrCodes.JsonData.find(e => e.QrCodeId == LocalQrCodeId);

    if (LocalQrCheck === undefined) {
        LocalReturnData.KReason = `No QrCode :${LocalQrCodeId}`
        return LocalReturnData;
    };

    let LocalRowNeeded = dbForQrCodes.JsonData.find(e => e.VoucherRef == LocalDc);

    if (LocalRowNeeded === undefined) {
        LocalReturnData.KReason = `Not this Dc :${LocalDc}`
        return LocalReturnData;
    };

    let LocalFactoryCheck = dbForQrCodes.JsonData.find(e => e.DCFactory == LocalFactoryName);

    if (LocalFactoryCheck === undefined) {
        LocalReturnData.KReason = `Not this Factory :${LocalFactoryName}`
        return LocalReturnData;
    };

    LocalReturnData.KTF = true;
    return LocalReturnData;
};
export { StartFunc };