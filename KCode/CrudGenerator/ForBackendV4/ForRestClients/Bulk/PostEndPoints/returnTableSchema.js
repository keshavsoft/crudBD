const StartFunc = ({ inConfigJson, inTableNameWithExtension }) => {
    let LocalChildren = inConfigJson.jsonConfig.tableAndColumns.children;
    let LocalColumnsSchemaToReturn = {};

    let LocalColumnsSchema = LocalChildren.find(element => {
        return element.name === inTableNameWithExtension;
    });

    for (const [key, value] of Object.entries(LocalColumnsSchema.fileData)) {
        switch (value.type) {
            case "STRING":
                LocalColumnsSchemaToReturn[key] = "";
                break;
            case "INTEGER":
            case "NUMBER":
            case "TELEPHONE":
                LocalColumnsSchemaToReturn[key] = 0;
                break;
            default:
                break;
        };

    };

    return LocalColumnsSchemaToReturn;
};

export { StartFunc };