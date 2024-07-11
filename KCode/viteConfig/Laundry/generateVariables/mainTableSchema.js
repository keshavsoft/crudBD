import { StartFunc as ReadTableSchema } from "../../../ReadTableSchema.js";
import path from "path";

const StartFunc = ({ inTableName }) => {
    let TableSchema = LocalReadTableSchema();

    let LoopinsideFind = TableSchema.find(element => {
        return inTableName.startsWith(path.parse(element.name).name);
    });

    let LoopInsidecolumnData = {};

    if (LoopinsideFind === undefined === false) {
        LoopInsidecolumnData = LoopinsideFind.fileData;
    };

    return LoopInsidecolumnData;
};

let LocalReadTableSchema = () => {
    let jVarLocalTableSchema = ReadTableSchema();

    return jVarLocalTableSchema.children;
};

export { StartFunc };