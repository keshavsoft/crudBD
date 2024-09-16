import fs from "fs";
import path from "path";
import dotenv from 'dotenv';
dotenv.config();
const CommonSearch = "Search";

let StartFunc = ({ inTablesCollection, inTo }) => {
    let LocalTypeName = `${CommonSearch}/restClients/GetEndPoints`;
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
    let LocalFileData = `GET http://localhost:${inFrom}/${CommonSearch}`;

    fs.writeFileSync(`${inTo}/home.http`, LocalFileData);
};

export { StartFunc };