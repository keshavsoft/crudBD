import { LowSync } from 'lowdb'
import { JSONFileSync } from 'lowdb/node'
import Configjson from '../../../../../Config.json' assert { type: 'json' };

let StartFunc = () => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    LocalReturnData.UserDataFilePath = `${Configjson.jsonConfig.DataPath}/${Configjson.jsonConfig.DataPk}/BillsQrCode.json`;

    const defaultData = { error: "From KLowDb" }

    const db = new LowSync(new JSONFileSync(LocalReturnData.UserDataFilePath), defaultData);

    return {
        dbObject: db,
        TableSchema: LocalFuncForTableSchema()
    };
};

let LocalFuncForTableSchema = () => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    let LocalSecondNeeded = Configjson.jsonConfig.tableAndColumns.children.find(element => {
        return "children" in element === false && element.name === "BillsQrCode.json";
    });

    return LocalSecondNeeded;
};

export { StartFunc };
