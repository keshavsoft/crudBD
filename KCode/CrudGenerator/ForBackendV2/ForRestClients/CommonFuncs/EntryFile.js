import fs from "fs";
import path from "path";

let StartFunc = ({ inTablesCollection, inTo, inFrom, inConfigJson, inFileLocation }) => {
    let LocalTypeName = inFileLocation;
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

            let LocalColumnsSchema = LocalFuncGetTableSchema({
                inConfigJson,
                inTableNameWithExtension: element.name
            });

            let LocalWithBody = LocalBinReplaced.replaceAll("{}", JSON.stringify(LocalColumnsSchema));

            fs.writeFileSync(`${LocalFilePath}/${LoopFile}`, LocalWithBody);
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