// import { JSONSyncPreset } from 'lowdb/node';
import { LowSync } from 'lowdb'
import { JSONFileSync } from 'lowdb/node'
import Configjson from '../../../Config.json' assert { type: 'json' };
import tableNameJson from '../../tableName.json' assert { type: 'json' };
import fs from "fs";

const CommonTableName = tableNameJson.tableName;
const CommonDataPath = `${Configjson.jsonConfig.DataPath}/${Configjson.jsonConfig.DataPk}/${CommonTableName}`;

let StartFunc = () => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    let LocaltableName = tableNameJson.tableName;

    LocalReturnData.KTF = false;

    LocalReturnData.UserDataFilePath = `${Configjson.jsonConfig.DataPath}/${Configjson.jsonConfig.DataPk}/${LocaltableName}`;

    const defaultData = { error: "From KLowDb" };

    const db = new LowSync(new JSONFileSync(LocalReturnData.UserDataFilePath), defaultData);
    db.read();

    LocalReturnData.JsonData = db.data;
    LocalFuncImagesOnly();
    LocalReturnData.KTF = true;

    return LocalReturnData;
};

const LocalFuncImagesOnly = () => {
    // Function to get current filenames 
    // in directory 
    filenames = fs.readdirSync(CommonDataPath);

    console.log("\nCurrent directory filenames:");

    filenames.forEach(file => {
        console.log(file);
    });
};

export { StartFunc };