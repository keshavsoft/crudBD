import { StartFunc as StartFuncPullData } from "./PullData/EntryFile.js";
import { StartFunc as StartFuncForeignKeyCheck } from "./Checks/ForeignKeyCheck.js";
import { StartFunc as StartFuncUniqueKeyCheck } from "./Checks/UniqueKeyCheck.js";

let StartFunc = ({ inTableSchema }) => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    const LocalTableSchema = inTableSchema;
    let LocalKeysNeeded = {};

    for (const prop in LocalTableSchema.fileData) {
        if ("references" in LocalTableSchema.fileData[prop]) {
            LocalKeysNeeded[prop] = LocalTableSchema.fileData[prop];
        };
    };

    if ((Object.keys(LocalKeysNeeded).length === 0) === false) {
        return LocalFuncTrue({ inKeysNeeded: LocalKeysNeeded });
    };

    return LocalReturnData;
};


let StartFunc1 = ({ inTableSchema }) => {
    const LocalTableSchema = inTableSchema;
    let LocalKeysNeeded = {};

    for (const prop in LocalTableSchema.fileData) {
        if ("references" in LocalTableSchema.fileData[prop]) {
            LocalKeysNeeded[prop] = LocalTableSchema.fileData[prop];
        };
    };

    if ((Object.keys(LocalKeysNeeded).length === 0) === false) {
        let LocalKeyNeeded = Object.keys(LocalKeysNeeded)[0];
        let LocalValueNeeded = inDataToInsert[LocalKeyNeeded];

        let LocalK1 = Object.values(LocalKeysNeeded)[0].references;
        let LocalDataNeeded = StartFuncForeignKeyCheck({
            inFileName: LocalK1.model,
            inKey: LocalK1.key, NeededKey: LocalValueNeeded
        });

        if (LocalDataNeeded.KTF === false) {
            LocalReturnData.KReason = LocalDataNeeded.KReason;
            return LocalReturnData;
        };

    };

    return LocalReturnData;
};

let LocalFuncTrue = ({ inKeysNeeded }) => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    let LocalKeysNeeded = inKeysNeeded;

    let LocalKeyNeeded = Object.keys(LocalKeysNeeded)[0];
    let LocalValueNeeded = inDataToInsert[LocalKeyNeeded];

    let LocalK1 = Object.values(LocalKeysNeeded)[0].references;
    let LocalDataNeeded = StartFuncForeignKeyCheck({
        inFileName: LocalK1.model,
        inKey: LocalK1.key, NeededKey: LocalValueNeeded
    });

    if (LocalDataNeeded.KTF === false) {
        LocalReturnData.KReason = LocalDataNeeded.KReason;
        return LocalReturnData;
    };

    return LocalReturnData;
};

export { StartFunc };