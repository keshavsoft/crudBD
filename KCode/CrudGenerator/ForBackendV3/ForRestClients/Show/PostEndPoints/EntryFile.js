import fs from "fs";
import path from "path";
import dotenv from 'dotenv';
dotenv.config();
const CommonShow = "Show";

let StartFunc = ({ inTablesCollection, inTo, inConfigJson }) => {
    let LocalTypeName = "Show/restClients/PostEndPoints";
    let LocalTo = inTo;

    let LocalTablesCollection = inTablesCollection;

    let LocalFirstLevelFolders = LocalTablesCollection.children.filter(element => {
        return "children" in element === false;
    }).filter(element => element.name.endsWith(".json"))

    LocalFirstLevelFolders.forEach(element => {
        let LoopInsideFileName = path.parse(element.name).name;
        let LocalFilePath = `${LocalTo}/${LoopInsideFileName}/${LocalTypeName}`;

        LocalFuncFilterDataFromBody({
            inFrom: `${process.env.PORT}/${LocalTo}/${LoopInsideFileName}`,
            inTo: `${LocalFilePath}`
        });
    });
};

const LocalFuncFilterDataFromBody = ({ inFrom, inTo }) => {
    let LocalFileData = `POST http://localhost:${inFrom}/${CommonShow}/FilterDataFromBody\r\n`;
    LocalFileData += `Content-Type: application/json\r\n`;

    let LocalBodyObject = {};
    LocalBodyObject.FindKey = "";
    LocalBodyObject.FindValue = "";

    fs.writeFileSync(`${inTo}/FilterDataFromBody.http`, `${LocalFileData}\r\n${JSON.stringify(LocalBodyObject)}`);
};

export { StartFunc };