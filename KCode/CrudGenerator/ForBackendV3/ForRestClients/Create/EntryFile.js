import fs from "fs";
import path from "path";
import dotenv from 'dotenv';
dotenv.config();
const CommonCreate = "Create";

let StartFunc = ({ inTablesCollection, inTo, inConfigJson }) => {
    LocalFuncForGetEndPoints({ inTablesCollection, inTo, inConfigJson });
};

let LocalFuncForGetEndPoints = ({ inTablesCollection, inTo, inConfigJson }) => {
    let LocalTypeName = "Create/restClients/PostEndPoints";
    let LocalTo = inTo;

    let LocalTablesCollection = inTablesCollection;

    let LocalFirstLevelFolders = LocalTablesCollection.children.filter(element => {
        return "children" in element === false;
    }).filter(element => element.name.endsWith(".json"))

    LocalFirstLevelFolders.forEach(element => {
        let LoopInsideFileName = path.parse(element.name).name;
        let LocalFilePath = `${LocalTo}/${LoopInsideFileName}/${LocalTypeName}`;

        LocalFuncWriteToHome({
            inFrom: `${process.env.PORT}/${LocalTo}/${LoopInsideFileName}`,
            inTo: `${LocalFilePath}`,
            inTableNameWithExtension: element.name,
            inConfigJson
        });
    });
};

const LocalFuncWriteToHome = ({ inFrom, inTo, inConfigJson, inTableNameWithExtension }) => {
    let LocalFileData = `POST http://localhost:${inFrom}/${CommonCreate}\r\n`;
    LocalFileData += `Content-Type: application/json\r\n`;

    let LocalColumnsSchema = LocalFuncGetTableSchema({
        inConfigJson,
        inTableNameWithExtension
    });

    fs.writeFileSync(`${inTo}/home.http`, `${LocalFileData}\r\n${JSON.stringify(LocalColumnsSchema)}`);
};

const LocalFuncGetTableSchema = ({ inConfigJson, inTableNameWithExtension }) => {
    let LocalChildren = inConfigJson.jsonConfig.tableAndColumns.children;
    let LocalColumnsSchemaToReturn = {};

    let LocalColumnsSchema = LocalChildren.find(element => {
        return element.name === inTableNameWithExtension;
    });

    for (const [key, value] of Object.entries(LocalColumnsSchema.fileData)) {
        LocalColumnsSchemaToReturn[key] = "";
    };

    return LocalColumnsSchemaToReturn;
};

export { StartFunc };