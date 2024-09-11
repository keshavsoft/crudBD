import { StartFunc as QrCodes } from '../CommonFuncs/QrCodes.js';
import { StartFunc as BranchDc } from '../CommonFuncs/BranchDc.js';
import { StartFunc as BranchScan } from '../CommonFuncs/BranchScan.js';

let StartFunc = ({ inBranch }) => {
    // let LocalFindValue = "02/09/2024";
    let LocalFindValue = new Date().toLocaleDateString('en-GB').replace(/\//g, '/');

    let LocalBranchName = inBranch;

    const Qrdb = QrCodes();
    Qrdb.read();

    const BranchDcdb = BranchDc();
    BranchDcdb.read();

    const BranchScandb = BranchDc();
    BranchScandb.read();

    let LocalFilterQr = Qrdb.data.filter(e => {
        return new Date(e.BookingData.OrderData.Currentdateandtime).toLocaleDateString('en-GB') == LocalFindValue && e.BookingData.OrderData.BranchName === LocalBranchName;
    });

    let LocalFilterBranchDc = BranchDcdb.data.filter(e => {
        return new Date(e.Date).toLocaleDateString('en-GB') == LocalFindValue && e.BranchName === LocalBranchName;
    });

    let LocalFilterBranchScan = BranchScandb.data.filter(e => {
        return new Date(e.DateTime).toLocaleDateString('en-GB') == LocalFindValue && e.BranchName === LocalBranchName;
    });

    let jVarLocalTransformedData = jFLocalMergeFunc({ inQrData: LocalFilterQr, inDcData: LocalFilterBranchDc, inScandata: LocalFilterBranchScan });
    let LocalInsertAggValues = jFLocalInsertQrCodeData({ inBranchName: LocalBranchName, inOrderData: jVarLocalTransformedData, inQrCodeData: Qrdb.data });
    let LocalArrayReverseData = LocalInsertAggValues.slice().reverse();

    return LocalArrayReverseData;
};

let jFLocalMergeFunc = ({ inQrData, inDcData, inScandata }) => {
    let localData = localDcAndScanChecFunc({ inDcData, inScandata });

    const result = inQrData.map(loopQr => {
        const match = localData.find(item2 => item2.QrCodeId == loopQr.pk);
        return {
            QrCodeId: item1.QrCodeId,
            ItemName: loopQr.ItemName,
            Rate: loopQr.Rate,
            FactorySelected: loopQr.FactorySelected,
            Date: match ? match.Date : null,
            Description: match ? match.Description : null,
            Factory: match ? match.Factory : null,
            matchRecord: !!match
        };
    });


    return jVarLocalReturnObject;
};

const localDcAndScanChecFunc = ({ inDcData, inScandata }) => {
    const result = inScandata.map(loopScan => {
        const match = inDcData.find(item2 => item2.pk === loopScan.VoucherRef);

        inDcData.filter(element => {

            if (loopScan.pk === element.QrCodeId) {
                loopScan.DcDate = element.Date
                loopScan.Description = element.Description
                loopScan.Factory = element.Factory
            };
        });
        loopScan.Status = match;

        return loopScan;
    });
    return result;
};


export { StartFunc };
