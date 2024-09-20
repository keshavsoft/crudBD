import { StartFunc as QrCodes } from '../CommonFuncs/QrCodes.js';
import { StartFunc as BranchScan } from '../CommonFuncs/BranchScan.js';

let StartFunc = ({ inId }) => {
    let LocalId = inId;
    let LocalReturnData = { KTF: false };

    const Qrdb = QrCodes();
    Qrdb.read();

    const BranchScandb = BranchScan();
    BranchScandb.read();

    let LocalBranchScanFilter = BranchScandb.data.find(e => e.QrCodeId == LocalId);

    if (LocalBranchScanFilter === undefined) {
        LocalReturnData.KReason = "No data"
        return LocalReturnData;
    };
    
    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = Qrdb.data.find(e => e.pk == LocalId);

    return LocalReturnData;
};

export { StartFunc };
// StartFunc({ inId: "39" })
