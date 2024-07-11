import { StartFunc as StartFuncForFlatJson } from "./ForFlatJson/EntryFile.js";
import { StartFunc as StartFuncForSequelize } from "./sqlite/ForSequelize/CreateData.js";

import ConfigJson from '../../Config.json' assert {type: 'json'};
import fs from "fs";
import path from "path";

let StartFunc = ({ inFilesArray, inFrom }) => {
    LocalFuncCreateFolder();
    LocalFuncCreateTableAsFolder({ inTablesCollection: inFilesArray });

    if (ConfigJson.isSequelize) {
        StartFuncForSequelize();

        return;
    };

    StartFuncForFlatJson({
        inTablesCollection: inFilesArray,
        inFrom
    });
};

let LocalFuncCreateFolder = () => {
    try {
        if (fs.existsSync(`${ConfigJson.ToDataDetails.DataPath}/${ConfigJson.ToDataDetails.DataPk}`) === false) {
            fs.mkdirSync(`${ConfigJson.ToDataDetails.DataPath}/${ConfigJson.ToDataDetails.DataPk}`, { recursive: true });
        };
    } catch (error) {
        console.log("error  : ", error);
    };
};

let LocalFuncCreateTableAsFolder = ({ inTablesCollection }) => {
    let LocalTablesCollection = inTablesCollection;
    // console.log("inTablesCollection : ", LocalTablesCollection);

    if ("children" in LocalTablesCollection === false) {
        return;
    };

    try {
        LocalTablesCollection.children.forEach(element => {
            let LoopInsidePath = `${ConfigJson.ToDataDetails.DataPath}/${ConfigJson.ToDataDetails.DataPk}/${path.parse(element.name).name}`;

            if (fs.existsSync(LoopInsidePath) === false) {
                fs.mkdirSync(LoopInsidePath, { recursive: true });
            };
        });
    } catch (error) {
        console.log("error  : ", error);
    };
};

export { StartFunc };
