import fs from "fs";
import ConfigJson from '../../../../../bin/Config.json' assert {type: 'json'};
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
                let LoopInsideArrayNeeded = JsonParseData.map(element => {
                    return element[LoopInsideColumnName];
                });

                LocalReturnData.JsonData[LoopInsideTableName] = LoopInsideArrayNeeded.sort();
            };
        };
    });

    LocalReturnData.KTF = true;

    return LocalReturnData;
};

const LocalFuncReadFileData = ({ inFilesAsArrayData }) => {
    let LocalFilesAsArrayData = inFilesAsArrayData;
    let LocalReturnData = { KTF: false }
    let LocalArray = LocalFilesAsArrayData.map(LoopFile => {
        const data = fs.readFileSync(LoopFile.path, { encoding: 'utf8', flag: 'r' });
        let JsonParseData = JSON.parse(data);

        let LoopInsideObject = {};
        LoopInsideObject.FileName = LoopFile.name;
        LoopInsideObject.FileData = JsonParseData;
        return LoopInsideObject;

    });
    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = LocalArray
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
