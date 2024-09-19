import Configjson from '../../../../Config.json' assert { type: 'json' };
import tableNameJson from '../../../tableName.json' assert { type: 'json' };
import { StartFunc as PullData } from "../PullData/EntryFile.js";

let StartFunc = () => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    let LocaltableName = tableNameJson.tableName;

    LocalReturnData.KTF = false;
    let LocalTableColumns = Configjson.jsonConfig.tableAndColumns;

    if ("children" in LocalTableColumns === false) {
        return false;
    };

    let LocalFindColumns = LocalTableColumns.children.find(element => {
        return element.name === LocaltableName;
    });

    let LocalColumnsOnly = Object.keys(LocalFindColumns.fileData);
    let LocalReturnObject = convertArrayToObject(LocalColumnsOnly);

    LocalFuncInsertDefaultValues({ inObject: LocalReturnObject, inTableSchema: LocalFindColumns.fileData })

    return LocalReturnObject;
};

const LocalFuncInsertDefaultValues = ({ inObject, inTableSchema }) => {
    for (const [key, value] of Object.entries(inTableSchema)) {
        if (value.presentDate) {
            inObject[key] = new Date().toISOString().split('T')[0];
        };
        if (value.max) {
            let LocalData = PullData();

            let LocalArrayPk = LocalData.inDb.data.map(element => element[key]);

            let numberArray = LocalArrayPk.map(Number);
            const newArray = numberArray.filter((value) => !Number.isNaN(value));

            let MaxPk = (Math.max(...newArray, 0) + 1);

            inObject[key] = MaxPk;
        };
    };
};

const convertArrayToObject = (array) => {
    const initialValue = {};
    return array.reduce((obj, item) => {
        return {
            ...obj,
            [item]: "",
        };
    }, initialValue);
};

export { StartFunc };