import fs from "fs";
import path from "path";
import dotenv from 'dotenv';
dotenv.config();
const CommonImages = "Images";

let StartFunc = ({ inTablesCollection, inTo }) => {
    let LocalTypeName = `${CommonImages}/restClients/GetEndPoints`;
    let LocalTo = inTo;

    let LocalTablesCollection = inTablesCollection;

    let LocalFirstLevelFolders = LocalTablesCollection.children.filter(element => {
        return "children" in element === false;
    }).filter(element => element.name.endsWith(".json"))

    LocalFirstLevelFolders.forEach(element => {
        let LoopInsideFileName = path.parse(element.name).name;
        let LocalFilePath = `${LocalTo}/${LoopInsideFileName}/${LocalTypeName}`;

        LocalFuncWriteToSingleImage({
            inFrom: `${process.env.PORT}/${LocalTo}/${LoopInsideFileName}`,
            inTo: `${LocalFilePath}`
        });

        LocalFuncWriteToAnyExt({
            inFrom: `${process.env.PORT}/${LocalTo}/${LoopInsideFileName}`,
            inTo: `${LocalFilePath}`
        });
    });
};

const LocalFuncWriteToSingleImage = ({ inFrom, inTo }) => {
    const LocalEndPoint = "SingleImage";
    let LocalFileData = `GET http://localhost:${inFrom}/${CommonImages}/${LocalEndPoint}`;

    fs.writeFileSync(`${inTo}/${LocalEndPoint}.http`, LocalFileData);
};

const LocalFuncWriteToAnyExt = ({ inFrom, inTo }) => {
    const LocalEndPoint = "anyExt";
    let LocalFileData = `GET http://localhost:${inFrom}/${CommonImages}/${LocalEndPoint}`;

    fs.writeFileSync(`${inTo}/${LocalEndPoint}.http`, LocalFileData);
};

export { StartFunc };