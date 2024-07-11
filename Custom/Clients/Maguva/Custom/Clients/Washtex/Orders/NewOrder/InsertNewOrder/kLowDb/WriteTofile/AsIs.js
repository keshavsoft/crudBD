import { StartFunc as StartFuncCommonFuncs } from '../CommonFuncs/ReturnDbObject.js';

let StartFunc = ({ inDataToInsert, inFileName }) => {
    let LocalFileName = inFileName;
    let LocalinDataToInsert = inDataToInsert;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    LocalReturnData.KTF = false;

    const db = StartFuncCommonFuncs({ inFileName: LocalFileName });

    db.read();

    if ("error" in db.data) {
        return db.data;
    };

    let MaxPk = LocalFuncMaxOrder({ inData: db.data });

    LocalinDataToInsert.OrderData.Currentdateandtime = LocalFuncCurrentDateTime();
    LocalinDataToInsert.pk = MaxPk + 1;

    db.data.push(LocalinDataToInsert);
    db.write();

    LocalReturnData.KTF=true;
    
    return LocalReturnData;
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

let LocalFuncCurrentDateTime = () => {
    let jVarLocalAddDays7 = new Date();
    let date = new Date(jVarLocalAddDays7);

    let dd = (date.getDate() < 10 ? '0' : '') + date.getDate();
    let MM = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
    let yyyy = date.getFullYear();

    return `${yyyy}-${MM}-${dd}`;
};

export { StartFunc };
