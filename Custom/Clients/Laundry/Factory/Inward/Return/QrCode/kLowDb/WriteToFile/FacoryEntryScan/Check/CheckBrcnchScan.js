import { StartFunc as StartFuncCommonFuncs } from '../../../CommonFuncs/EntryScan.js';

const StartFunc = ({ inTable, inQrCodeId }) => {
    let LocalFactoryName = inTable;
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


    let LocalFactoryCheck = dbForQrCodes.JsonData.find(e => e.DCFactory == LocalFactoryName);

    if (LocalFactoryCheck === undefined) {
        LocalReturnData.KReason = `Not this Factory :${LocalFactoryName}`
        return LocalReturnData;
    };

    LocalReturnData.KTF = true;
    return LocalReturnData;
};
export { StartFunc };