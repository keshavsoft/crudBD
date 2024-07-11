import fs from "fs";
import path from "path";

let CommonFromFolderName = "DataSchema";
import ConfigJson from '../../../../bin/Config.json' assert {type: 'json'};

let StartFunc = () => {
    let LocalDataPk = ConfigJson.jsonConfig.DataPk;
    let LocalDataPath = `KCode/${CommonFromFolderName}/${LocalDataPk}`;

    if (fs.existsSync(LocalDataPath) === false) {
        console.log(`folder doesnot exist : ${LocalDataPath}`);
        return false;
    };

    try {
        const files = fs.readdirSync(LocalDataPath);
        const LocalJsonFiles = files.filter(file => {
            return path.parse(file).ext === ".json";
        });

        return LocalJsonFiles;
    } catch (err) {
        console.error(err);
    }
};

export { StartFunc };
