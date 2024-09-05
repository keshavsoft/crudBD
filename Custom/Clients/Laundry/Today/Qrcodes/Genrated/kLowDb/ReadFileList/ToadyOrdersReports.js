import { StartFunc as StartFuncCommonFuncs } from '../CommonFuncs/Transactions.js';
import { StartFunc as StartFuncQrCodes } from '../CommonFuncs/QrCodes.js';

let StartFunc = ({ inBranch }) => {
    // let LocalFindValue = "02/09/2024";
    let LocalFindValue = new Date().toLocaleDateString('en-GB').replace(/\//g, '/');

    let LocalBranchName = inBranch;

    const Orderdb = StartFuncCommonFuncs({ inBranchName: LocalBranchName });
    Orderdb.read();

    const Qrdb = StartFuncQrCodes();
    Qrdb.read();

    let LocalFilterBranchData = Orderdb.data.filter(e => {
        return new Date(e.OrderData.Currentdateandtime).toLocaleDateString('en-GB') == LocalFindValue;
    });

    let jVarLocalTransformedData = jFLocalSettlementFunc({ inData: LocalFilterBranchData });
    let LocalInsertAggValues = jFLocalInsertQrCodeData({ inBranchName: LocalBranchName, inOrderData: jVarLocalTransformedData, inQrCodeData: Qrdb.data });
    let LocalArrayReverseData = LocalInsertAggValues.slice().reverse();

    return LocalArrayReverseData;
};

let jFLocalSettlementFunc = ({ inData }) => {
    let jVarLocalReturnObject = [];

    jVarLocalReturnObject = Object.entries(inData).map(element => {

        if (Object.values(element[1].CheckOutData)[0]) {

            element[1].IsSettled = false;
            element[1].TotalPcs = Object.values(element[1].ItemsInOrder).map(p => p.Pcs).reduce((acc, val) => acc + parseInt(val), 0)
            element[1].DiscountPer = Object.values(element[1].CheckOutData)[0].DiscountPer
            element[1].DiscountAmount = Object.values(element[1].CheckOutData)[0].GstData.DiscountAmount
            element[1].CardAmount = Object.values(element[1].CheckOutData)[0].CardAmount
            element[1].CashAmount = Object.values(element[1].CheckOutData)[0].CashAmount
            element[1].UPIAmount = Object.values(element[1].CheckOutData)[0].UPIAmount
            element[1].TotalAmount = Object.values(element[1].CheckOutData)[0].CardAmount + Object.values(element[1].CheckOutData)[0].CashAmount + Object.values(element[1].CheckOutData)[0].UPIAmount;
        };
        if (Object.keys(element[1].CheckOutData).length > 0) {
            element[1].IsSettled = true;
        };
        delete element[1].ItemsInOrder;
        delete element[1].AddOnData;
        delete element[1].CheckOutData;


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

export { StartFunc };
