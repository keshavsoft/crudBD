import { StartFunc as StartFuncForFlatJson } from "./ForFlatJson/EntryFile.js";
import { StartFunc as StartFuncReadDataSchema } from "./ReadDataSchema.js";
import ConfigJson from '../Config.json' assert {type: 'json'};
import { readdirSync } from 'fs'
import fs from "fs";

let StartFunc = () => {
    let LocalInDataPk = LocalFuncGenerateDataPk();

    let LocalFilesArray = StartFuncReadDataSchema();

    LocalFuncCreateFolder({ inDataPk: LocalInDataPk });

    StartFuncForFlatJson({
        inTablesCollection: LocalFilesArray,
        inDataPk: LocalInDataPk
    });
    return LocalInDataPk;
};

let LocalFuncCreateFolder = ({ inDataPk }) => {
    let LocalDataPK = inDataPk;
    try {
        if (fs.existsSync(`${ConfigJson.ToDataDetails.DataPath}/${LocalDataPK}`) === false) {
            fs.mkdirSync(`${ConfigJson.ToDataDetails.DataPath}/${LocalDataPK}`, { recursive: true });
        };
    } catch (error) {
        console.log("error  : ", error);
    };
};

let LocalFuncGenerateDataPk = () => {
    let LocalFolders = getDirectories(ConfigJson.ToDataDetails.DataPath);

    const largestString = LocalFolders.reduce((largest, current) => {
        return current > largest ? current : largest;
    }, '');

    let LocalDataPk = parseInt(largestString) + 1;
    // console.log("local:",LocalDataPk);
    return LocalDataPk;
}

const getDirectories = source =>
    readdirSync(source, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)

export { StartFunc };
