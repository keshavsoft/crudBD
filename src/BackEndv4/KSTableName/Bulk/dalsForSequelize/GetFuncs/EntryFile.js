import { StartFunc as StartFuncInsertRow } from "../../kSequelize/WriteToFile/InsertRow.js";

let GetFunc = async (inPostBody) => {
    return await StartFuncInsertRow(inPostBody);
};

export {
    GetFunc
};