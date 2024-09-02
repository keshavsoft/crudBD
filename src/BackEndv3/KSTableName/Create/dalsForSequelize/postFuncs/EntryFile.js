import { StartFunc as StartFuncInsertRow } from "../../kSequelize/WriteToFile/InsertRow.js";

let PostFunc = async (inPostBody) => {
    return await StartFuncInsertRow(inPostBody);
};

export {
    PostFunc
};