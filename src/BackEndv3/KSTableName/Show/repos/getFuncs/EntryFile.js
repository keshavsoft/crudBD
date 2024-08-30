import {
    GetFunc as GetFuncDal, GetDataOnlyFunc as GetDataOnlyFuncDal,
    GetImagesFunc as GetImagesFuncDal,
    GetBodyCheckFunc as GetBodyCheckFuncDal,
    GetFromModalFunc as GetFromModalFuncDal,
    GetFromModalUuidFunc as GetFromModalUuidFuncDal,
    GetWithJoinsFunc as GetWithJoinsFuncDal,
    GetDataSortByColumnFunc as GetDataSortByColumnFuncDal,
    GetRowDataFunc as GetRowDataFuncDal,
    GetMaxRowFunc as GetMaxRowFuncDal,
    GetLastRowFunc as GetLastRowFuncDal
} from '../../dals/getFuncs/EntryFile.js';

import {
    GetDataOnlyFunc as GetDataOnlyFuncDalsForSequelize
} from '../../dalsForSequelize/getFuncs/EntryFile.js';

import {
    GetDataOnlyFunc as GetDataOnlyFuncDalsForMongoDb
} from '../../dalsForMongoDb/getFuncs/EntryFile.js';

import ConfigJson from '../../../../Config.json' assert {type: 'json'};

let GetFunc = async () => {
    return GetFuncDal();
};

let GetRowDataFunc = async ({ inId }) => {
    if (ConfigJson.isSequelize) {
        return await GetDataOnlyFuncDalsForSequelize();
    };

    if (ConfigJson.isMongoDb) {
        return GetDataOnlyFuncDalsForMongoDb();
    };

    return GetRowDataFuncDal({ inId });
};

let GetDataOnlyFunc = async () => {
    if (ConfigJson.isSequelize) {
        return await GetDataOnlyFuncDalsForSequelize();
    };

    if (ConfigJson.isMongoDb) {
        return GetDataOnlyFuncDalsForMongoDb();
    };

    return GetDataOnlyFuncDal();
};
let GetDataSortByColumnFunc = async () => {
    if (ConfigJson.isSequelize) {
        return await GetDataOnlyFuncDalsForSequelize();
    };

    if (ConfigJson.isMongoDb) {
        return GetDataOnlyFuncDalsForMongoDb();
    };

    return GetDataSortByColumnFuncDal();
};

let GetImagesFunc = async () => {
    if (ConfigJson.isSequelize) {
        return await GetDataOnlyFuncDalsForSequelize();
    };

    if (ConfigJson.isMongoDb) {
        return GetDataOnlyFuncDalsForMongoDb();
    };

    return GetImagesFuncDal();
};
let GetBodyCheckFunc = async () => {
    if (ConfigJson.isSequelize) {
        return await GetDataOnlyFuncDalsForSequelize();
    };

    if (ConfigJson.isMongoDb) {
        return GetDataOnlyFuncDalsForMongoDb();
    };

    return GetBodyCheckFuncDal();
};
let GetFromModalUuidFunc = async () => {
    if (ConfigJson.isSequelize) {
        return await GetDataOnlyFuncDalsForSequelize();
    };

    if (ConfigJson.isMongoDb) {
        return GetDataOnlyFuncDalsForMongoDb();
    };

    return GetFromModalUuidFuncDal();
};
let GetFromModalFunc = async () => {
    if (ConfigJson.isSequelize) {
        return await GetDataOnlyFuncDalsForSequelize();
    };

    if (ConfigJson.isMongoDb) {
        return GetDataOnlyFuncDalsForMongoDb();
    };

    return GetFromModalFuncDal();
};
let GetWithJoinsFunc = async () => {
    if (ConfigJson.isSequelize) {
        return await GetDataOnlyFuncDalsForSequelize();
    };

    if (ConfigJson.isMongoDb) {
        return GetDataOnlyFuncDalsForMongoDb();
    };

    return GetWithJoinsFuncDal();
};
let GetMaxRowFunc = async () => {
    if (ConfigJson.isSequelize) {
        return await GetDataOnlyFuncDalsForSequelize();
    };

    if (ConfigJson.isMongoDb) {
        return GetDataOnlyFuncDalsForMongoDb();
    };

    return GetMaxRowFuncDal();
};

let GetLastRowFunc = async () => {
    if (ConfigJson.isSequelize) {
        return await GetDataOnlyFuncDalsForSequelize();
    };

    if (ConfigJson.isMongoDb) {
        return GetDataOnlyFuncDalsForMongoDb();
    };

    return GetLastRowFuncDal();
};
export {
    GetFunc, GetDataOnlyFunc, GetImagesFunc, GetBodyCheckFunc, GetFromModalFunc,
    GetFromModalUuidFunc, GetWithJoinsFunc, GetDataSortByColumnFunc, GetRowDataFunc,
    GetMaxRowFunc,GetLastRowFunc
};