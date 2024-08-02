// import { JSONSyncPreset } from 'lowdb/node';
import { LowSync } from 'lowdb'
import { JSONFileSync } from 'lowdb/node'
import Configjson from '../../../Config.json' assert { type: 'json' };
import tableNameJson from '../../tableName.json' assert { type: 'json' };
import fs from "fs";
import path, { resolve } from 'path';

const CommonTableName = tableNameJson.tableName;
const CommonDataPath = `${Configjson.jsonConfig.DataPath}/${Configjson.jsonConfig.DataPk}/${path.parse(CommonTableName).name}`;

let StartFunc = () => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    let LocaltableName = tableNameJson.tableName;

    LocalReturnData.KTF = false;

    LocalReturnData.UserDataFilePath = `${Configjson.jsonConfig.DataPath}/${Configjson.jsonConfig.DataPk}/${LocaltableName}`;

    const defaultData = { error: "From KLowDb" };

    const db = new LowSync(new JSONFileSync(LocalReturnData.UserDataFilePath), defaultData);
    db.read();

    LocalReturnData.JsonData = db.data;
    LocalFuncCheckImages();
    LocalReturnData.KTF = true;

    return LocalReturnData;
};

const LocalFuncCheckImages = () => {
    const defaultData = { error: "From KLowDb" };

    const db = new LowSync(new JSONFileSync(CommonDataPath), defaultData);
    db.read();

    return db.data;
};

const LocalFuncReturnImagesArray = () => {
    const LocalRootPath = __basedir;
    // Function to get current filenames 
    // in directory 
    const LocalDataPath = resolve(LocalRootPath, CommonDataPath);
    let LocalFilesNames = fs.readdirSync(LocalDataPath);

    console.log("\nCurrent directory filenames:", LocalDataPath);

    const LocalFilesNamesWithOutExtension = filenames.map(file => {
        return path.parse(file).name;
    });
};

export { StartFunc };