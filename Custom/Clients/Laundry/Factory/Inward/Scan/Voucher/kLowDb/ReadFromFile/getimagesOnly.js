// import { JSONSyncPreset } from 'lowdb/node';
import { LowSync } from 'lowdb'
import { JSONFileSync } from 'lowdb/node'
import Configjson from '../../../../Config.json' assert { type: 'json' };
import tableNameJson from '../../../tableName.json' assert { type: 'json' };
import fs from "fs";
import path, { resolve } from 'path';

const CommonTableName = tableNameJson.tableName;
const CommonDataPath = `${Configjson.jsonConfig.DataPath}/${Configjson.jsonConfig.DataPk}/${path.parse(CommonTableName).name}`;
const CommonFilePath = `${Configjson.jsonConfig.DataPath}/${Configjson.jsonConfig.DataPk}/${CommonTableName}`;

let StartFunc = () => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    LocalReturnData.JsonData = LocalFuncCheckImages();
    LocalReturnData.KTF = true;

    return LocalReturnData;
};

const LocalFuncCheckImages = () => {
    const LocalRootPath = __basedir;
    // Function to get current filenames 

    // in directory 
    const LocalDataPath = resolve(LocalRootPath, CommonFilePath);
    const defaultData = { error: "From KLowDb" };

    const db = new LowSync(new JSONFileSync(LocalDataPath), defaultData);
    db.read();

    let LocalImagesArray = LocalFuncReturnImagesArray();

    let LocalFilteredRows = db.data.filter(element => {
        return LocalImagesArray.includes(element.pk);
    });

    return LocalFilteredRows;
};

const LocalFuncReturnImagesArray = () => {
    const LocalRootPath = __basedir;
    // Function to get current filenames 
    // in directory 
    const LocalDataPath = resolve(LocalRootPath, CommonDataPath);
    let LocalFilesNames = fs.readdirSync(LocalDataPath);

    console.log("\nCurrent directory filenames:", LocalDataPath);

    const LocalFilesNamesWithOutExtension = LocalFilesNames.map(file => {
        return path.parse(file).name;
    });

    let numberArray = LocalFilesNamesWithOutExtension.map(Number);

    return numberArray;
};

export { StartFunc };