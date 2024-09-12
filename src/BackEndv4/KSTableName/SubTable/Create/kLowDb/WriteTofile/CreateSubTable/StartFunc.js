import { StartFunc as StartFuncPullData } from "./PullData/EntryFile.js";

let StartFunc = ({ inDataToInsert, id, inKey }) => {
    let LocalinDataToInsert = inDataToInsert;
    let localid = parseInt(id);
    let LocalinKey = inKey;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    let LocalStartFuncPullData = StartFuncPullData();

    if (LocalStartFuncPullData === false) {
        LocalReturnData.KReason = LocalStartFuncPullData.KReason;
        return LocalReturnData;
    };

    const db = LocalStartFuncPullData.inDb;

    let LocalFindRow = db.data.find(element => element.pk === localid);

    let LocalItemsData = LocalFindRow[LocalinKey]

    LocalFuncInsert({ inDataToInsert: LocalinDataToInsert, inItemsData: LocalItemsData });
    db.write();

    LocalReturnData.KTF = true;
    LocalReturnData.pk = LocalItemsData.pk;
    return LocalReturnData;
};

const LocalFuncInsert = ({ inDataToInsert, inItemsData }) => {
    let LocalInData = inItemsData;

    let numberArray = Object.keys(LocalInData).map(Number);

    let MaxPk = (Math.max(...numberArray, 0) + 1);
    LocalFuncGenerateItemSerial({ inDataToInsert, inItemsData })
    LocalInData[MaxPk] = inDataToInsert;
};

const LocalFuncGenerateItemSerial = ({ inDataToInsert, inItemsData }) => {
    let LocalInData = Object.values(inItemsData);
    let LocalItemSerial = LocalInData.map(element => element.ItemSerial);
    inDataToInsert.ItemSerial = Math.max(...LocalItemSerial, 0) + 1;
};

export { StartFunc };