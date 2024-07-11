import { StartFunc as StartFuncCommonFuncs } from '../CommonFuncs/ReturnDbObject.js';

let StartFunc = ({ inDataToInsert, inFileName }) => {
    let LocalFileName = inFileName;
    let LocalinDataToInsert = inDataToInsert;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    LocalReturnData.KTF = false;

    const db = StartFuncCommonFuncs({ inFileName: LocalFileName })
    db.read();
    if ("error" in db.data) {
        return db.data;
    };
    let MaxPk = LocalFuncMaxOrder({ inData: db.data });

    let LocalFindRow = db.data.find(element => element.pk === MaxPk);

    let LocalAddOnData = LocalFindRow.AddOnData

    LocalFuncInsert({ inDataToInsert: LocalinDataToInsert, inAddOnData: LocalAddOnData });
    // db.data.push(LocalDataWithUuid);
    db.write();

};

const LocalFuncInsert = ({ inDataToInsert, inAddOnData }) => {
    let LocalInData = inAddOnData;

    let numberArray = Object.keys(LocalInData).map(Number);

    let MaxPk = (Math.max(...numberArray, 0) + 1);
    // LocalFuncGenerateItemSerial({ inDataToInsert, inAddOnData: LocalInData })
    LocalInData[MaxPk] = inDataToInsert;
};

const LocalFuncGenerateItemSerial = ({ inDataToInsert, inItemsData }) => {
    let LocalInData = Object.values(inItemsData);
    let LocalItemSerial = LocalInData.map(element => element.ItemSerial);
    inDataToInsert.ItemSerial = Math.max(...LocalItemSerial, 0) + 1;
};

const LocalFuncMaxOrder = ({ inData }) => {
    let LocalInData = inData;
    let LocalArrayPk = LocalInData.map(element => element.pk);


    let LocalRemoveUndefined = LocalArrayPk.filter(function (element) {
        return element !== undefined;
    });

    let numberArray = LocalRemoveUndefined.map(Number);

    let MaxPk = Math.max(...numberArray, 0);

    return MaxPk
};

const Timestamp = () => {
    let currentDate = new Date();
    let formattedDate = currentDate.toISOString();
    return formattedDate;
};

let LocalFuncCurrentDateTime = () => {
    let jVarLocalAddDays7 = new Date();
    let date = new Date(jVarLocalAddDays7);

    let dd = (date.getDate() < 10 ? '0' : '') + date.getDate();
    let MM = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
    let yyyy = date.getFullYear();
    // let HH = date.getHours();

    let HH = (date.getHours() < 10 ? '0' : '') + date.getHours();
    let mm = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    let ss = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();

    return `${yyyy}-${MM}-${dd}T${HH}:${mm}:${ss}`;
};

export { StartFunc };
