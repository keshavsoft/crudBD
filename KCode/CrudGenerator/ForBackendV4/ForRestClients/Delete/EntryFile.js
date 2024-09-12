import fs from "fs";
import path from "path";
import dotenv from 'dotenv';
dotenv.config();
const CommonDelete = "Delete";
import { StartFunc as DeleteEndPoints } from "./DeleteEndPoints/EntryFile.js";

let StartFunc = ({ inTablesCollection, inTo }) => {
    DeleteEndPoints({ inTablesCollection, inTo });
};

let LocalFuncForGetEndPoints = ({ inTablesCollection, inTo }) => {
    let LocalTypeName = `${CommonDelete}/restClients/${CommonDelete}EndPoints`;
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
            inTo: `${LocalFilePath}`
        });
    });
};

const LocalFuncWriteToHome = ({ inFrom, inTo }) => {
    let LocalFileData = `DELETE http://localhost:${inFrom}/${CommonDelete}\r\n`;

    fs.writeFileSync(`${inTo}/home.http`, `${LocalFileData}\r\n}`);
};

export { StartFunc };