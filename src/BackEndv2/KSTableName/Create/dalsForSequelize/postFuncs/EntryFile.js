import { StartFunc as StartFuncInsertRow } from "../../kSequelize/WriteToFile/InsertRow.js";

let PostFunc = (inPostBody) => {
    return StartFuncInsertRow(inPostBody);
};

export {
    PostFunc
};