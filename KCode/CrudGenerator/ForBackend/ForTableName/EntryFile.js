import fs from 'fs';
import path from 'path';

let StartFunc = ({ inElement, inTablesCollection, inFrom, inTo }) => {
    let LocalElement = inElement;
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
    let LocalTypeName = inTypeName;
    let LocalTo = inTo;

    LocalFilesArray.forEach(LoopFile => {
        let LoopInsideFileName = path.parse(LoopFile.name).name;
        let LocalFilePath = `${LocalTo}/${LoopInsideFileName}/${LocalFileName}`;

        let LocalFileData = fs.readFileSync(LocalFilePath);
        let LocalfileNameJsonData = JSON.parse(LocalFileData);
        LocalfileNameJsonData.tableName = LoopFile.name;

        fs.writeFileSync(LocalFilePath, JSON.stringify(LocalfileNameJsonData));
    });
};

export { StartFunc };