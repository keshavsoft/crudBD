import { StartFunc as StartFuncreadFile } from '../../forMongoDb/readFile/readFile.js';
import { StartFunc as StartFunRowCount } from '../../kSequelize/ReadFileList/rowCount.js';
import { AllColumns as AllColumnsFromGetTableInfo } from '../../kSequelize/modals/GetTableInfo/TableColumns.js';

import { StartFunc as StartFuncReadFileFromModal } from '../../kLowDb/ReadFileList/readFileFromModal.js';
import { StartFunc as StartFunReadFileById } from '../../kLowDb/ReadFileList/readFileById.js';
import { StartFunc as StartFuncGetTableSchema } from '../../kLowDb/GetTableSchema/GetColumns.js';

let GetFunc = () => {
    return StartFuncreadFile();
};

let GetDataOnlyFunc = async () => {
    let LocalFromLowDb = await StartFuncreadFile();

    if (LocalFromLowDb.KTF === false) {
        return LocalFromLowDb;
    };

    return LocalFromLowDb;
};

let GetIdFunc = ({ inId }) => {
    let LocalFromLowDb = StartFunReadFileById({ inId });

    if (LocalFromLowDb === false) {
        return false;
    };

    return LocalFromLowDb.JsonData;
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
    return StartFuncGetTableSchema();
};

let GetRowCountFunc = async () => {
    let LocalFromLowDb = await StartFunRowCount();

    if (LocalFromLowDb.KTF === false) {
        return LocalFromLowDb;
    };

    return LocalFromLowDb;
};

let GetColumnsSchemaFunc = async () => {
    let LocalFromLowDb = await AllColumnsFromGetTableInfo();

    if (LocalFromLowDb.KTF === false) {
        return LocalFromLowDb;
    };

    return LocalFromLowDb;
};

export {
    GetFunc, GetDataOnlyFunc, GetFromModalFunc,
    GetFromModalUuidFunc, GetFromModalUuidAndTSFunc,
    GetIdFunc, GetBodyCheckFunc, GetRowCountFunc,
    GetColumnsSchemaFunc
};