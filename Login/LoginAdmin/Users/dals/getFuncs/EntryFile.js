import { StartFunc as StartFuncPullData } from '../../kLowDb/GetData.js';
import { StartFunc as StartFuncUpdateData } from '../../kLowDb/UpdateData/Email.js';
import { StartFunc as StartFuncDataBase } from "../../../../../SetupFuncs/ForDatabase/EntryFile.js";
import { StartFunc as StartFuncUpdateDataPk } from "../../kLowDb/UpdateData/DataPK.js";

let GetFunc = () => {
    return StartFuncPullData();
};

let ValidateEmailFunc = ({ inUuid }) => {
    let LocalUuId = inUuid
    let LocalFromLowDb = StartFuncUpdateData({ inUuid });
    let LocalDataPk;

    if (LocalFromLowDb.KTF) {
        LocalDataPk = StartFuncDataBase();
        let LocalFromLowDbDataPk = StartFuncUpdateDataPk({ inDataPk : LocalDataPk, inUuid: LocalUuId});
        return LocalFromLowDbDataPk;
    }
    return LocalFromLowDb;
};

export { GetFunc, ValidateEmailFunc };