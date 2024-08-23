import { StartFunc as StartFuncPullData } from "../PullData/EntryFile.js";

let StartFunc = () => {
    let LocalReturnData = { KTF: false };
    LocalReturnData.KTF = false;

    let LocalStartFuncPullData = StartFuncPullData();

    if (LocalStartFuncPullData === false) {
        LocalReturnData.KReason = LocalStartFuncPullData.KReason;
        return LocalReturnData;
    };
    const db = LocalStartFuncPullData.inDb;

    if (db.data.length === 0) {
        LocalReturnData.KReason = "No Data"
        return LocalReturnData;
    };

    let maxRow;
    let maxPk = -Infinity;

    for (const row of db.data) {
        if (row.pk > maxPk) {
            maxPk = row.pk;
            maxRow = row;
        }
    }

    LocalReturnData.JsonData = maxRow;
    LocalReturnData.KTF = true;

    return LocalReturnData;
};

export { StartFunc };