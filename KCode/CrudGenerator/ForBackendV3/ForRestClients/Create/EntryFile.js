import fs from "fs";
import path from "path";
import dotenv from 'dotenv';
dotenv.config();

let StartFunc = ({ inTablesCollection, inTo }) => {
    LocalFuncForGetEndPoints({ inTablesCollection, inTo });
};

let LocalFuncForGetEndPoints = ({ inTablesCollection, inTo }) => {
    let LocalTypeName = "Create/restClients/getEndPoints";
    let LocalTo = inTo;

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
            let LocalFileData = `POST http://localhost:${process.env.PORT}/${LocalTo}/${LoopInsideFileName}/Create`;

            fs.writeFileSync(`${LocalFilePath}/${LoopFile}`, LocalFileData);
        });
    });
};

export { StartFunc };