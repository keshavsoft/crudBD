import { StartFunc as BranchDc } from '../CommonFuncs/BranchDc.js';
import { StartFunc as BranchScan } from '../CommonFuncs/BranchScan.js';
import { StartFunc as EntryScan } from '../CommonFuncs/EntryScan.js';
import { StartFunc as EntryCancelScan } from '../CommonFuncs/EntryCancelScan.js';

let StartFunc = ({ inFactory }) => {
    // let LocalFindValue = new Date().toLocaleDateString('en-GB').replace(/\//g, '/');
    let LocalFactory = inFactory;

    const BranchDcdb = BranchDc();
    BranchDcdb.read();

    const BranchScandb = BranchScan();
    BranchScandb.read();

    const EntryScandb = EntryScan();
    EntryScandb.read();

    const EntryCancelScandb = EntryCancelScan();
    EntryCancelScandb.read();

    let LocalFilterBranchDc = BranchDcdb.data.filter(e => e.Factory === LocalFactory);
    let LocalFilterBranchSan = BranchScandb.data.filter(e => e.DCFactory === LocalFactory);

    let LocalFilterEntryScan = EntryScandb.data.filter(e => e.FactoryName === LocalFactory);
    let LocalFilterEntryCancelScan = EntryCancelScandb.data.filter(e => e.FactoryName === LocalFactory);

    let jVarLocalTransformedData = jFLocalMergeFunc({
        inBranchDc: LocalFilterBranchDc,
        inBranchScan: LocalFilterBranchSan,
        inEntryScan: LocalFilterEntryScan,
        inEntryCancelScan: LocalFilterEntryCancelScan
    });
    let LocalArrayReverseData = jVarLocalTransformedData.slice().reverse();

    return LocalArrayReverseData;
};

let jFLocalMergeFunc = ({ inBranchDc, inBranchScan, inEntryScan, inEntryCancelScan }) => {

    let jVarLocalReturnObject = inBranchDc.map(loopDc => {

        let LocalFilterBranchScanData = inBranchScan.filter(loopQr => loopQr.VoucherRef == loopDc.pk);
        let LocalFilterEntrySacnData = inEntryScan.filter(loopQr => loopQr.VoucherRef == loopDc.pk);

        let LocalFilrerEntryReturnData = inEntryCancelScan.map(loop =>
            LocalFilterEntrySacnData.filter(element => loop.QrCodeId === element.QrCodeId)
        );

        loopDc.Sent = LocalFilterBranchScanData.length;
        loopDc.Scanned = LocalFilterEntrySacnData.length;
        loopDc.Return = LocalFilrerEntryReturnData.length;
        loopDc.TimeSpan = TimeSpan({ DateTime: loopDc.DateTime });
        return loopDc
    });

    return jVarLocalReturnObject;
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
// StartFunc({ inFactory: "Vizag" });
