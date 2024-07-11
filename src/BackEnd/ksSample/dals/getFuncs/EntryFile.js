import { StartFunc as StartFuncreadFile } from '../../kLowDb/ReadFileList/readFile.js';
import { StartFunc as StartFuncReadFileFromModal } from '../../kLowDb/ReadFileList/readFileFromModal.js';
import { StartFunc as StartFunReadFileById } from '../../kLowDb/ReadFileList/readFileById.js';
import { StartFunc as StartFunreadFileById } from '../../kLowDb/ReadFile/readFileById.js';
import { StartFunc as StartFunFilterDataByKeyId } from '../../kLowDb/ReadFile/FilterInKeyInValue.js';

import { StartFunc as StartFuncGetTableSchema } from '../../kLowDb/GetTableSchema/GetColumns.js';
import { StartFunc as StartFuncColumnsAsObject } from "../../kLowDb/GetTableSchema/ColumnsAsObject.js";
import { StartFunc as StartFunMaxWithKey } from '../../kLowDb/ReadFile/MaxWithKey.js';
import { StartFunc as StartFuncMaxRow } from '../../kLowDb/ReadFile/MaxRow.js';
import { StartFunc as StartFuncUniqueWithKey } from '../../kLowDb/ReadFile/UniqueKey.js';

let GetFunc = () => {
    return StartFuncreadFile();
};

let GetDataOnlyFunc = () => {
    let LocalFromLowDb = StartFuncreadFile();

    if (LocalFromLowDb === false) {
        return false;
    };

    return LocalFromLowDb.JsonData;
};

let GetIdFunc = async ({ inId }) => {
    let LocalFromLowDb = await StartFunreadFileById({ inId });

    return LocalFromLowDb;
};

let GetFromModalFunc = () => {
    return StartFuncReadFileFromModal();
};

let GetFromModalUuidFunc = () => {
    return StartFuncReadFileFromModal();
};

let GetFromModalUuidAndTSFunc = () => {
    return StartFuncReadFileFromModal();
};

let GetBodyCheckFunc = () => {
    return StartFuncColumnsAsObject();
};

let GetColumnsSchemaFunc = () => {
    return StartFuncGetTableSchema();
};

let GetRowCountFunc = () => {
    return StartFuncGetTableSchema();
};

let GetFilterDataFunc = async ({ inKey, inValue }) => {
    return await StartFunFilterDataByKeyId({ inKey, inValue });

};

let GetMaxWithKeyFunc = async ({ inKey }) => {
    return await StartFunMaxWithKey({ inKey });

};

let GetUniqueWithKeyFunc = async ({ inKey }) => {
    return await StartFuncUniqueWithKey({ inKeyName: inKey });
};

let GetMaxRowFunc = () => {
    return StartFuncMaxRow();
};

export {
    GetFunc, GetDataOnlyFunc, GetFromModalFunc,
    GetFromModalUuidFunc, GetFromModalUuidAndTSFunc,
    GetIdFunc, GetBodyCheckFunc, GetRowCountFunc, GetFilterDataFunc,
    GetColumnsSchemaFunc, GetMaxWithKeyFunc, GetMaxRowFunc,
    GetUniqueWithKeyFunc
};