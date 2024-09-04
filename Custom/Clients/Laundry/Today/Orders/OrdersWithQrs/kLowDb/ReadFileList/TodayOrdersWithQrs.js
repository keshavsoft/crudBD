import { StartFunc as StartFuncCommonFuncs } from '../CommonFuncs/Transactions.js';
import { StartFunc as StartFuncQrCodes } from '../CommonFuncs/QrCodes.js';

let StartFunc = ({ inBranch }) => {
    // let LocalFindValue = "02/09/2024";
    let LocalFindValue = new Date().toLocaleDateString('en-GB').replace(/\//g, '/');

    let LocalBranchName = inBranch;

    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    const db = StartFuncCommonFuncs({ inBranchName: LocalBranchName });
    db.read();

    const Qrdb = StartFuncQrCodes();
    Qrdb.read();

    let LocalFilterBranchData = db.data.filter(e => {
        return new Date(e.OrderData.Currentdateandtime).toLocaleDateString('en-GB') == LocalFindValue;
    });

    let jVarLocalTransformedData = jFLocalInsertAggValues({ inData: LocalFilterBranchData });
    let LocalInsertAggValues = jFLocalInsertQrCodeData({ inBranchName: LocalBranchName, inOrderData: jVarLocalTransformedData, inQrCodeData: Qrdb.data });
    let LocalArrayReverseData = LocalInsertAggValues.slice().reverse();

    return LocalArrayReverseData;
};

let jFLocalInsertAggValues = ({ inData }) => {
    let jVarLocalReturnObject = [];

    jVarLocalReturnObject = Object.entries(inData).map(element => {
        element[1].AggValues = {};
        element[1].AggValues.ItemDetails = `${Object.keys(element[1].ItemsInOrder).length} / ${Object.values(element[1].ItemsInOrder).map(p => p.Pcs).reduce((acc, val) => acc + parseInt(val), 0)}`;

        element[1].AggValues.SettlementAmount = ""
        if (Object.values(element[1].CheckOutData)[0]) {
            element[1].AggValues.SettlementAmount = Object.values(element[1].CheckOutData)[0].CardAmount + Object.values(element[1].CheckOutData)[0].CashAmount + Object.values(element[1].CheckOutData)[0].UPIAmount;
            element[1].IsSettled = false;
            element[1].TimeSpan = TimeSpan(element[1].OrderData.Currentdateandtime);
        };
        if (Object.keys(element[1].CheckOutData).length > 0) {
            element[1].IsSettled = true;
        };
        delete element[1].ItemsInOrder;
        delete element[1].AddOnData;
        delete element[1].CheckOutData;
        delete element[1].OrderData;

        return element[1];
    });

    return jVarLocalReturnObject;
};

let jFLocalInsertQrCodeData = ({ inBranchName, inOrderData, inQrCodeData }) => {
    let LocalBranchName = inBranchName;

    let jVarLocalReturnArray = [];
    inOrderData.forEach(element => {
        element.IsQrCodesRaised = false;
        element.TotalItems = 0;
        if (Array.isArray(inQrCodeData)) {
            let FilterCheck = inQrCodeData.filter(ele => ele.OrderNumber == element.pk && ele.BookingData.OrderData.BranchName == LocalBranchName);
            if (FilterCheck.length > 0) {
                element.TotalItems = FilterCheck.length;
                element.IsQrCodesRaised = true;
            }
        }
        jVarLocalReturnArray.push(element);
    });

    return jVarLocalReturnArray;
};

function TimeSpan(DateTime) {
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
}


export { StartFunc };
