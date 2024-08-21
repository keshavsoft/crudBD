import { StartFunc as CommonFuncs } from "../CommonFuncs/EntryFile.js";

import fs from "fs";
import path from "path";

let StartFunc = ({ inTablesCollection, inTo, inFrom, inConfigJson }) => {
    LocalFuncForTestEndPoint({ inTablesCollection, inTo, inFrom, inConfigJson });
};

let LocalFuncForTestEndPoint = ({ inTablesCollection, inTo, inFrom, inConfigJson }) => {
    let LocalTypeNameForPost = "Create/restClients/PostEndPoints";

    CommonFuncs({
        inTablesCollection, inTo, inFrom, inFileLocation: LocalTypeNameForPost,
        inConfigJson
    });
};

let LocalFuncForTestEndPoint1 = ({ inTablesCollection, inTo, inFrom }) => {
    let LocalTypeName = "Create/restClients/PostEndPoints";
    let LocalTo = inTo;
    let LocalFrom = inFrom;

    let LocalTablesCollection = inTablesCollection;

    let LocalFirstLevelFolders = LocalTablesCollection.children.filter(element => {
        return "children" in element === false;
    }).filter(element => element.name.endsWith(".json"))

    LocalFirstLevelFolders.forEach(element => {
        let LoopInsideFileName = path.parse(element.name).name;
        let LocalFilePath = `${LocalTo}/${LoopInsideFileName}/${LocalTypeName}`;

        let LoopInsideFiles = fs.readdirSync(LocalFilePath, { withFileTypes: true })
            .filter(item => !item.name.endsWith(".json"))
            .map(item => item.name);

        LoopInsideFiles.forEach(LoopFile => {
            let LocalFileData = fs.readFileSync(`${LocalFilePath}/${LoopFile}`);

            let LocalFileDataReplaced = LocalFileData.toString().replaceAll("ksSample", LoopInsideFileName);
            let LocalBinReplaced = LocalFileDataReplaced.replaceAll(LocalFrom, LocalTo);

            fs.writeFileSync(`${LocalFilePath}/${LoopFile}`, LocalBinReplaced);
        });
    });
};

let LocalFuncCommon = ({ inTablesCollection, inTo, inFrom, inTypeName, inConfigJson }) => {
    let LocalTypeName = inTypeName;
    let LocalTo = inTo;
    let LocalFrom = inFrom;

    let LocalTablesCollection = inTablesCollection;

    let LocalFirstLevelFolders = LocalTablesCollection.children.filter(element => {
        return "children" in element === false;
    }).filter(element => element.name.endsWith(".json"))

    LocalFirstLevelFolders.forEach(element => {
        let LoopInsideFileName = path.parse(element.name).name;
        let LocalFilePath = `${LocalTo}/${LoopInsideFileName}/${LocalTypeName}`;

        let LoopInsideFiles = fs.readdirSync(LocalFilePath, { withFileTypes: true })
            .filter(item => !item.name.endsWith(".json"))
            .map(item => item.name);

        LoopInsideFiles.forEach(LoopFile => {
            let LocalFileData = fs.readFileSync(`${LocalFilePath}/${LoopFile}`);

            let LocalFileDataReplaced = LocalFileData.toString().replaceAll("ksSample", LoopInsideFileName);
            let LocalBinReplaced = LocalFileDataReplaced.replaceAll(LocalFrom, LocalTo);

            fs.writeFileSync(`${LocalFilePath}/${LoopFile}`, LocalBinReplaced);
        });
    });
};

export { StartFunc };