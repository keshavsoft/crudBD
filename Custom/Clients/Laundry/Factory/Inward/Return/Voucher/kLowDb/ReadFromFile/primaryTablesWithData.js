import fs from "fs";
import ConfigJson from '../../../../Config.json' assert {type: 'json'};
import path from "path";

let StartFunc = () => {
    let LocalForeignTables = LocalFuncReturnForeignTables();

    let LocalReturnData = { KTF: false }
    LocalReturnData.JsonData = {};

    let LocalDataPath = `${ConfigJson.jsonConfig.DataPath}/${ConfigJson.jsonConfig.DataPk}`;

    let filenames = fs.readdirSync(LocalDataPath);

    filenames.forEach((file) => {
        if (fs.lstatSync(`${LocalDataPath}/${file}`).isFile()) {
            let LoopInsideTableName = path.parse(file).name;

            if (LocalForeignTables.includes(LoopInsideTableName)) {
                let LoopInsideTableColumns = ConfigJson.jsonConfig.tableAndColumns.children.find(element => {
                    return element.name === file;
                });

                let LoopInsideColumnName;

                for (const [key, value] of Object.entries(LoopInsideTableColumns.fileData)) {
                    if (value.unique) {
                        LoopInsideColumnName = key;
                    };
                };

                const data = fs.readFileSync(`${LocalDataPath}/${file}`, { encoding: 'utf8' });

                let JsonParseData = JSON.parse(data);
                
                LocalReturnData.JsonData[LoopInsideTableName] = JsonParseData;
            };
        };
    });

    LocalReturnData.KTF = true;

    return LocalReturnData;
};

let LocalFuncReturnForeignTables = () => {
    let LoopInsideArray = [];

    ConfigJson.jsonConfig.tableAndColumns.children.forEach(element => {
        for (const [key, value] of Object.entries(element.fileData)) {
            if ("references" in value) {
                LoopInsideArray.push(value.references.model);
            };
        };
    });

    return LoopInsideArray;
};

export { StartFunc };
