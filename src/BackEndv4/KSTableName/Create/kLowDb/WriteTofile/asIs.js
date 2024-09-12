import { StartFunc as ReturnDbObject } from '../CommonFuncs/ReturnDbObject.js';
import { StartFunc as LocalFuncGeneratePk } from "./Generate.js";

let StartFunc = ({ inDataToInsert }) => {
    let LocalinDataToInsert = inDataToInsert;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    const db = ReturnDbObject();
 
    let LocalDataWithUuid = LocalFuncGeneratePk({
        inDataToInsert: LocalinDataToInsert,
        inData: db.data,
        inColumns: LocalTableSchema.fileData
    });

    if (LocalDataWithUuid.KTF === false) {
        LocalReturnData.KReason = LocalDataWithUuid.KReason;
        return LocalReturnData;
    };

    db.data.push(LocalDataWithUuid.InsertData);
    db.write();

    LocalReturnData.KTF = true;
    LocalReturnData.pk = LocalDataWithUuid.InsertData.pk;

    return LocalReturnData;
};

export { StartFunc };