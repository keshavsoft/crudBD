const StartFunc = ({ inConfigJson, inTableNameWithExtension }) => {
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