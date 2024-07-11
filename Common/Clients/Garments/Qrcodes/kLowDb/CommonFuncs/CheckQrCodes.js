import { StartFunc as StartFuncCommonFuncs } from '../../../../../../bin/QrCodes/Generate/kLowDb/CommonFuncs/ReturnDbObject.js';

const StartFuncForBookings = ({ inTable, inBookingPk }) => {
    let LocalBranchName = inTable;
    let LocalBookingPk = inBookingPk;

    let LocalReturnData = { KTF: false };
    const dbForQrCodes = StartFuncCommonFuncs();
    dbForQrCodes.read();

    let LocalRowNeeded = dbForQrCodes.data.find(e => e.OrderNumber == LocalBookingPk && e.BookingData.OrderData.BranchName == LocalBranchName);
    console.log('LocalRowNeeded:',LocalRowNeeded);

    if (LocalRowNeeded === undefined) {
        LocalReturnData.KTF = true;
        return LocalReturnData;
    };

    return LocalReturnData;
};
export { StartFuncForBookings };