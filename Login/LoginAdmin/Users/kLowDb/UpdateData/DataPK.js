import { StartFunc as StartFuncReturnDbObject } from "../CommonFuncs/ReturnDbObject.js";

let StartFunc = ({ inDataPk, inUuid }) => {

    let LocalDataPk = inDataPk;
    let LocalUuId = inUuid;

    let LocalReturnData = { KTF: false }

    let LocalFromLowDb = StartFuncReturnDbObject();

    LocalFromLowDb.read();

    if ("error" in LocalFromLowDb.data) {
        LocalReturnData.err = LocalFromLowDb.data.error;
        return LocalReturnData;
    }

    let LocalFindData = LocalFromLowDb.data.find(e => e.UuId == LocalUuId)

    if (LocalFindData === undefined) {
        LocalReturnData.KReason = "UuID Not Found";
        return LocalReturnData;
    }

    LocalFindData.DataPk = LocalDataPk;

    LocalFromLowDb.write();

    LocalReturnData.KTF = true;
    LocalReturnData.DataPk = inDataPk;


    return LocalReturnData;
};


export { StartFunc };
