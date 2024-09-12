import fs from 'fs';
import path from 'path';

let StartFunc = ({ inTablesCollection, inFrom, inTo }) => {
    let LocalTypeName = "kLowDb";
    let LocalFrom = inFrom;
    let LocalTo = inTo;
    let LocalSampleString = "ksSample";

    let LocalTablesCollection = inTablesCollection;

    let LocalFirstLevelFolders = LocalTablesCollection.children.filter(element => {
        return "children" in element === false;
    });

    LocalFuncForreadFile({
        inFilesArray: LocalFirstLevelFolders,
        inTo: LocalTo, inFrom: LocalFrom, inTypeName: LocalTypeName, inSampleString: LocalSampleString
    });
};

let LocalFuncForreadFile = ({ inFilesArray, inFrom, inTo, inTypeName, inSampleString }) => {
    let LocalFileName = "tableName.json";
    let LocalFilesArray = inFilesArray;
    let LocalTo = inTo;

    LocalFilesArray.forEach(LoopFile => {
        let LoopInsideFileName = path.parse(LoopFile.name).name;
        let LocalFilePath = `${LocalTo}/${LoopInsideFileName}/${LocalFileName}`;

        let LocalFileData = fs.readFileSync(LocalFilePath);
        let LocalfileNameJsonData = JSON.parse(LocalFileData);
        LocalfileNameJsonData.tableName = LoopFile.name;
        LocalfileNameJsonData.ColumnsSchema = LocalFuncGetSchemaFromConfig({
            inTableName: LoopFile.name,
            inTo: LocalTo
        });

        fs.writeFileSync(LocalFilePath, JSON.stringify(LocalfileNameJsonData));
    });
};

const LocalFuncGetSchemaFromConfig = ({ inTableName, inTo }) => {
    const LocalConfigFilePath = `${inTo}/Config.json`;

    const LocalConfigJson = fs.readFileSync(LocalConfigFilePath, { encoding: 'utf8' });

    const LocalChildren = JSON.parse(LocalConfigJson).jsonConfig.tableAndColumns.children;

    const LocalSchemaFind = LocalChildren.find(element => {
        return element.name === inTableName;
    });

    return LocalSchemaFind.fileData;
};

export { StartFunc };