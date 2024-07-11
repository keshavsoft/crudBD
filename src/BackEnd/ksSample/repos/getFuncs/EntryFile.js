import {
    GetFunc as GetFuncDal, GetDataOnlyFunc as GetDataOnlyFuncDal,
    GetFromModalUuidFunc as GetFromModalUuidFuncDal,
    GetFromModalUuidAndTSFunc as GetFromModalUuidAndTSFuncDal,
    GetFromModalFunc as GetFromModalFuncDal,
    GetIdFunc as GetIdFuncDal, GetBodyCheckFunc as GetBodyCheckFuncDal,
    GetFilterDataFunc as GetFilterDataFuncDal,
    GetColumnsSchemaFunc as GetColumnsSchemaFuncDal,
    GetMaxWithKeyFunc as GetMaxWithKeyFuncDal,
    GetMaxRowFunc as GetMaxRowFuncDal,
    GetUniqueWithKeyFunc as GetUniqueWithKeyFuncDal
} from '../../dals/getFuncs/EntryFile.js';

import {
    GetIdFunc as GetIdFuncDalsForSequelize,
    GetDataOnlyFunc as GetDataOnlyFuncDalsForSequelize,
    GetRowCountFunc as GetRowCountFuncDalsForSequelize,
    GetColumnsSchemaFunc as GetColumnsSchemaFuncDalsForSequelize,
    GetRawSqlFunc as GetRawSqlFuncDal
} from '../../dalsForSequelize/getFuncs/EntryFile.js';

import {
    GetDataOnlyFunc as GetDataOnlyFuncDalsForMongoDb
} from '../../dalsForMongoDb/getFuncs/EntryFile.js';

import ConfigJson from '../../../Config.json' assert {type: 'json'};

let GetFunc = async () => {
    return GetFuncDal();
};

let GetDataOnlyFunc = async () => {
    if (ConfigJson.isSequelize) {
        return GetDataOnlyFuncDalsForSequelize();
    };

    if (ConfigJson.isMongoDb) {
        return GetDataOnlyFuncDalsForMongoDb();
    };

    return GetDataOnlyFuncDal();
};

let GetIdFunc = async ({ inId }) => {
    if (ConfigJson.isSequelize) {
        return GetIdFuncDalsForSequelize({ inId });
    };

    return await GetIdFuncDal({ inId });
};

let GetFromModalFunc = () => {
    return GetFromModalFuncDal();
};

let GetFromModalUuidFunc = () => {
    return GetFromModalUuidFuncDal();
};

let GetFromModalUuidAndTSFunc = () => {
    return GetFromModalUuidAndTSFuncDal();
};

let GetBodyCheckFunc = async () => {
    return GetBodyCheckFuncDal();
};

let GetRowCountFunc = async () => {
    if (ConfigJson.isSequelize) {
        return GetRowCountFuncDalsForSequelize();
    };

    return GetFuncDal();
};

let GetColumnsSchemaFunc = async () => {
    if (ConfigJson.isSequelize) {
        return await GetColumnsSchemaFuncDalsForSequelize();
    };

    return GetColumnsSchemaFuncDal();
};

let GetfilterDataFunc = async ({ inKey, inValue }) => {
    return await GetFilterDataFuncDal({ inKey, inValue });
};

let GetMaxWithKeyFunc = async ({ inKey }) => {
    return await GetMaxWithKeyFuncDal({ inKey });
};

let GetUniqueWithKeyFunc = async ({ inKey }) => {
    return await GetUniqueWithKeyFuncDal({ inKey });
};

let GetMaxRowFunc = () => {
    return GetMaxRowFuncDal();
};

let GetRawSqlFunc = async ({ inId }) => {
    if (ConfigJson.isSequelize) {
        return await GetRawSqlFuncDal({ inId });
    };

    return await { KReason: "Only From Sql " };
};

export {
    GetFunc, GetDataOnlyFunc, GetFromModalFunc,
    GetFromModalUuidFunc, GetFromModalUuidAndTSFunc,
    GetIdFunc, GetBodyCheckFunc, GetRowCountFunc,
    GetColumnsSchemaFunc, GetfilterDataFunc, GetMaxWithKeyFunc, GetMaxRowFunc,
    GetUniqueWithKeyFunc, GetRawSqlFunc
};