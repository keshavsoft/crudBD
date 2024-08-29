import fs from "fs";
import path from "path";
import dotenv from 'dotenv';
dotenv.config();

let StartFunc = ({ inTablesCollection, inTo, inConfigJson }) => {
    LocalFuncForGetEndPoints({ inTablesCollection, inTo, inConfigJson });
};

let LocalFuncForGetEndPoints = ({ inTablesCollection, inTo, inConfigJson }) => {
    let LocalTypeName = "Alter/restClients/PutEndPoints";
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
            let LocalFileData = `PUT http://localhost:${process.env.PORT}/${LocalTo}/${LoopInsideFileName}/Alter\r\n\r\n`;

            let LocalColumnsSchema = LocalFuncGetTableSchema({
                inConfigJson,
                inTableNameWithExtension: element.name
            });

            fs.writeFileSync(`${LocalFilePath}/${LoopFile}`, `${LocalFileData}\r\n${JSON.stringify(LocalColumnsSchema)}`);
        });
    });
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