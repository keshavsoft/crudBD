import { StartFunc as StartFuncReadBranchFile } from './readBranchFile.js';
import { StartFunc as StartFuncwriteFileFromModal } from '../../../../../../../bin/QrCodes/Generate/kLowDb/WriteFileList/writeFile.js';
import { StartFuncForBookings as StartFuncCheckQrCodes } from "../CheckQrCodes.js";
import { StartFunc as StartFuncNoOrderCheck } from "./Check/NoOrderCheck.js";
import { StartFunc as StartFuncSettlementCheck } from "./Check/SettlementCheck.js";

let StartFunc = ({ inTable, inId }) => {
    let LocalTable = inTable;
    let LocalBookingPk = inId;
    let LocalReturnData = { KTF: false };

    let LocalCheck = StartFuncCheckQrCodes({ inTable: LocalTable, inBookingPk: LocalBookingPk });

    if (LocalCheck.KTF === false) {
        return LocalReturnData;
    };

    const db = StartFuncReadBranchFile({ inTable: LocalTable });
    db.read();
    let LocalBranchData = db.data;

    let LocalOrdeCheck = StartFuncNoOrderCheck({ inBranchData: LocalBranchData, inBookingPk: LocalBookingPk });

    if (LocalOrdeCheck.KTF === false) {
        LocalReturnData.KReason = LocalOrdeCheck.KReason;
        return LocalReturnData;
    };

    let LocalSettlementCheck = StartFuncSettlementCheck({ inBranchData: LocalBranchData, inBookingPk: LocalBookingPk });

    if (LocalSettlementCheck.KTF === false) {
        LocalReturnData.KReason = LocalSettlementCheck.KReason;
        return LocalReturnData;
    };

    let LocalIdByOrderData = LocalSettlementCheck.JsonData;

    let LocalGenerateReference = {}
    LocalGenerateReference.GenerateReference = {}
    LocalGenerateReference.GenerateReference.ReferncePk = LocalBookingPk;
    let LocalBookingData = {};
    LocalBookingData.BookingData = {};
    LocalBookingData.OrderNumber = LocalIdByOrderData.UuId
    LocalBookingData.BookingData.CustomerData = LocalIdByOrderData.CustomerData;
    LocalBookingData.BookingData.OrderData = LocalIdByOrderData.OrderData;
    LocalBookingData.BookingData.AddOnData = LocalIdByOrderData.AddOnData;
    LocalBookingData.BookingData.CheckOutData = LocalIdByOrderData.CheckOutData;

    Object.entries(LocalIdByOrderData.ItemsInOrder).forEach(([key, value]) => {
        LocalForEachFunc({ inGenerateReference: LocalGenerateReference, itemData: value, inBookingData: LocalBookingData });
    });
    LocalReturnData.KTF = true;
    delete LocalReturnData.JsonData;
    return LocalReturnData;
};

let LocalForEachFunc = ({ inGenerateReference, itemData, inBookingData }) => {
    for (let i = 0; i < itemData.Pcs; i++) {

        let LocalSendData = {};
        LocalSendData.Pcs = i
        LocalSendData = { ...inGenerateReference, ...itemData, ...inBookingData }
        StartFuncwriteFileFromModal({ inDataToInsert: LocalSendData })

    };
};

export { StartFunc };
