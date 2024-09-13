import { StartFunc as StartFuncCommonFuncs } from '../CommonFuncs/Transactions.js';

let StartFunc = ({ inBranch }) => {
    // let LocalFindValue = "02/09/2024";
    let LocalFindValue = new Date().toLocaleDateString('en-GB').replace(/\//g, '/');

    let LocalBranchName = inBranch;
    let LocalReturnData = { KTF: false }

    const Orderdb = StartFuncCommonFuncs({ inBranchName: LocalBranchName });
    Orderdb.read();

    let LocalFilterBranchData = Orderdb.data.filter(e => {
        return new Date(e.OrderData.Currentdateandtime).toLocaleDateString('en-GB') == LocalFindValue;
    });

    if (LocalFilterBranchData.length === 0) {
        LocalReturnData.KReason = "No Data"
        return LocalReturnData;
    };
    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = LocalFilterBranchData.slice().reverse();

    return LocalReturnData;
};

export { StartFunc };
