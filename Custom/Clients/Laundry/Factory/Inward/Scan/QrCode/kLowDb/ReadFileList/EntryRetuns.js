import { StartFunc as QrCodes } from '../CommonFuncs/QrCodes.js';
import { StartFunc as EntryCancelScan } from '../CommonFuncs/EntryCancelScan.js';
import { StartFunc as EntryCancelDc } from '../CommonFuncs/EntryCancelDc.js';

let StartFunc = ({ inFactory }) => {
    // let LocalFindValue = new Date().toLocaleDateString('en-GB').replace(/\//g, '/');
    let LocalFactory = inFactory;

    const Qrdb = QrCodes();
    Qrdb.read();

    const EntryCancelDcdb = EntryCancelDc();
    EntryCancelDcdb.read();

    const EntryCancelScandb = EntryCancelScan();
    EntryCancelScandb.read();

    let LocalFilterEntryCancelDc = EntryCancelDcdb.data.filter(e => e.FactoryName === LocalFactory);

    let LocalFilterQr = Qrdb.data.filter(e => e.location === LocalFactory);

    let LocalFilterCancelScan = EntryCancelScandb.data.filter(e => e.FactoryName === LocalFactory);

    let LoclaReturnScanAndDcMergeData = LoclaReturnScanAndDcMergeFunc({ inCancelScan: LocalFilterCancelScan, inCancelDc: LocalFilterEntryCancelDc });

    let jVarLocalTransformedData = jFLocalMergeFunc({
        inQrData: LocalFilterQr,
        inEntryCancelScan: LoclaReturnScanAndDcMergeData

    });

    let LocalArrayReverseData = jVarLocalTransformedData.slice().reverse();

    return LocalArrayReverseData;
};

let jFLocalMergeFunc = ({ inQrData, inEntryCancelScan }) => {
    let jVarLocalReturnObject = inEntryCancelScan.map(loopScan => {
        const matchedRecord = inQrData.find(loopQr => loopQr.pk == loopScan.QrCodeId);

        return {
            OrderNumber: matchedRecord?.GenerateReference.ReferncePk,
            OrderDate: new Date(matchedRecord?.BookingData.OrderData.Currentdateandtime).toLocaleDateString('en-GB'),
            DeliveryDate: new Date(matchedRecord?.DeliveryDateTime).toLocaleDateString('en-GB'),
            ItemName: matchedRecord?.ItemName,
            Rate: matchedRecord?.Rate,

            VoucherNumber: loopScan?.VoucherNumber,
            QrCodeId: loopScan.QrCodeId,
            DCDate: new Date(loopScan?.Date).toLocaleDateString('en-GB'),
            BranchName: loopScan?.BranchName,
            TimeSpan: TimeSpan({ DateTime: loopScan.DateTime })
        };
    }).filter(record => record.MatchedRecord !== null);
    return jVarLocalReturnObject;
};


const LoclaReturnScanAndDcMergeFunc = ({ inCancelScan, inCancelDc }) => {

    let LocalMapData = inCancelScan.map(element => {

        let locaFindData = inCancelDc.find(e => e.pk == element.VoucherNumber)
        return { ...locaFindData, ...element }
    });
    return LocalMapData;
};

function TimeSpan({ DateTime }) {
    var diffMs = new Date() - new Date(DateTime);
    var diffMonths = Math.floor(diffMs / 2629800000); // approximate months (30.44 days)
    var diffDays = Math.floor((diffMs % 2629800000) / 86400000);
    var diffHrs = Math.floor((diffMs % 86400000) / 3600000);
    var diffMins = Math.round((diffMs % 3600000) / 60000);

    if (diffMonths > 0) {
        return diffMonths + " months, " + diffDays + " days, " + diffHrs + " hours, " + diffMins + " min";
    } else if (diffDays > 0) {
        return diffDays + " days, " + diffHrs + " hours, " + diffMins + " min";
    } else if (diffHrs > 0) {
        return diffHrs + " hours, " + diffMins + " min";
    } else {
        return diffMins + " min";
    }
};

export { StartFunc };
// StartFunc({ inFactory: "Vizag" })
