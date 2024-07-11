import ConfigJson from '../../../../bin/Config.json' assert {type: 'json'};
import path from "path";

let LocalFuncReturnChildren = () => {
    return ConfigJson.jsonConfig.tableAndColumns.children;
};

const StartFunc = ({ inTableName }) => {
    let TableSchema = LocalFuncReturnChildren();

    let LoopinsideFind = TableSchema.find(element => {
        return inTableName.startsWith(path.parse(element.name).name);
    });

    let LoopInsidecolumnData = {};

    if (LoopinsideFind === undefined === false) {
        LoopInsidecolumnData = LoopinsideFind.fileData;
    };

    return LoopInsidecolumnData;
};

export { StartFunc };