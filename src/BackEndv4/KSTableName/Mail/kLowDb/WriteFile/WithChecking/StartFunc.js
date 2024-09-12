import { StartFunc as StartFuncPullData } from "./PullData/EntryFile.js";
import { StartFunc as StartFuncChecks } from "./Checks/QrCheck.js";
import { StartFunc as StartFuncUniqueKeyCheck } from "./Checks/UniqueKeyCheck.js";

let StartFunc = ({ inDataToInsert }) => {
    let LocalinDataToInsert = inDataToInsert;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    let LocalStartFuncPullData = StartFuncPullData();

    if ("error" in LocalStartFuncPullData) {
        LocalReturnData.KReason = LocalStartFuncPullData.error;
        return LocalReturnData;
    };

    const LocalTableSchema = LocalStartFuncPullData.inTableSchema;
    const db = LocalStartFuncPullData.inDb;
    let LocalKeysNeeded = LocalFuncReferenceObject({ inTableSchema: LocalTableSchema });

    if ((Object.keys(LocalKeysNeeded).length === 0) === false) {
        let LocalKeyNeeded = Object.keys(LocalKeysNeeded)[0];
        let LocalValueNeeded = inDataToInsert[LocalKeyNeeded];

        let LocalK1 = Object.values(LocalKeysNeeded)[0].references;
        let localSarchKey = LocalK1.key;
        let LocalDataNeeded = StartFuncChecks({ inFileName: LocalK1.model.tableName, NeededKey: LocalValueNeeded, inSearchKey: localSarchKey });

        if (LocalDataNeeded.KTF === false) {
            LocalReturnData.KReason = LocalDataNeeded.KReason;
            return LocalReturnData;
        };
    };

    let LocalStartFuncChecksQrCodeId = StartFuncUniqueKeyCheck({
        inData: db.data, inDataToInsert: LocalinDataToInsert,
        inTableSchema: LocalTableSchema.fileData
    });

    if (LocalStartFuncChecksQrCodeId.KTF === false) {
        LocalReturnData.KReason = LocalStartFuncChecksQrCodeId.KReason;
        return LocalReturnData;
    };

    let LocalDataWithUuid = LocalFuncGeneratePk({
        inDataToInsert: LocalinDataToInsert,
        inData: db.data, inTableSchema: LocalTableSchema.fileData
    });

    if (LocalDataWithUuid.KTF === false) {
        LocalReturnData.KReason = LocalDataWithUuid.KReason;
        return LocalReturnData;
    };

    db.data.push(LocalDataWithUuid.InsertData);
    db.write();

    LocalReturnData.KTF = true;
    LocalReturnData.ScanNo = LocalDataWithUuid.InsertData.QrCodeId
    return LocalReturnData;
};

let LocalFuncReferenceObject = ({ inTableSchema }) => {
    let LocalTableSchema = inTableSchema;
    let LocalKeysNeeded = {};

    for (const prop in LocalTableSchema.fileData) {
        if ("references" in LocalTableSchema.fileData[prop]) {
            LocalKeysNeeded[prop] = LocalTableSchema.fileData[prop];
        };
    };

    return LocalKeysNeeded;

};

const LocalFuncGeneratePk = ({ inDataToInsert, inData, inTableSchema }) => {
    let LocalInData = inData;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    let LocalArrayPk = LocalInData.map(element => element.pk);

    let LocalRemoveUndefined = LocalArrayPk.filter(function (element) {
        return element !== undefined;
    });

    let numberArray = LocalRemoveUndefined.map(Number);

    let MaxPk = (Math.max(...numberArray, 0) + 1);
    LocalFuncForPrimaryKey({ inDataToInsert, inTableSchema, inData: LocalInData })

    LocalReturnData.InsertData = { ...inDataToInsert, UuId: MaxPk, DateTime: Timestamp() };
    LocalReturnData.KTF = true;
    return LocalReturnData
};

const LocalFuncForPrimaryKey = ({ inData, inTableSchema, inDataToInsert }) => {
    let LocalInData = inData;
    let LocalTableSchema = inTableSchema;
    let LocalKeysNeeded = {};
    for (const prop in LocalTableSchema) {
        if (LocalTableSchema[prop].primaryKey) {
            LocalKeysNeeded[prop] = LocalTableSchema[prop];
        };
    };
    for (const prop in LocalKeysNeeded) {
        let LocalArrayPk = LocalInData.map(element => element[prop]);

        let LocalRemoveUndefined = LocalArrayPk.filter(function (element) {
            return element !== undefined && element !== NaN;
        });

        let numberArray = LocalRemoveUndefined.map((LoopItem) => parseInt(LoopItem, 0));
        let MaxPk = (Math.max(...numberArray, 0) + 1);

        inDataToInsert[prop] = MaxPk;
    };
};

const Timestamp = () => {
    let currentDate = new Date();
    let formattedDate = currentDate.toISOString();
    return formattedDate;
};

export { StartFunc };