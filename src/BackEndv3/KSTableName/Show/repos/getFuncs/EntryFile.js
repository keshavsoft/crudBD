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
    GetLastRowFunc as GetLastRowFuncDal,
    GetFilterFunc as GetFilterFuncDal
} from '../../dals/getFuncs/EntryFile.js';

import {
    GetFunc as GetFuncDalForSequlize,
    GetDataOnlyFunc as GetDataOnlyFuncDalsForSequelize
} from '../../dalsForSequelize/getFuncs/EntryFile.js';

import {
    GetFunc as GetFuncDalForMongoDb,
    GetDataOnlyFunc as GetDataOnlyFuncDalsForMongoDb,
    GetLastRowFunc as GetLastRowFuncRepoForMongoDbDal
} from '../../dalsForMongoDb/getFuncs/EntryFile.js';

import ConfigJson from '../../../../Config.json' assert {type: 'json'};

let GetFunc = async () => {
    if (ConfigJson.isSequelize) {
        return await GetFuncDalForSequlize();
    };

    if (ConfigJson.isMongoDb) {
        return await GetFuncDalForMongoDb();
    };

    return GetFuncDal();
};

let GetDataOnlyFunc = async () => {
    if (ConfigJson.isSequelize) {
        return await GetDataOnlyFuncDalsForSequelize();
    };

    if (ConfigJson.isMongoDb) {
        return await GetDataOnlyFuncDalsForMongoDb();
    };

    return GetDataOnlyFuncDal();
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
        return await GetLastRowFuncRepoForMongoDbDal();
    };

    return GetLastRowFuncDal();
};
let GetFilterFunc = async ({ inFilterKey, inFilterValue }) => {
    if (ConfigJson.isSequelize) {
        return await GetDataOnlyFuncDalsForSequelize();
    };

    if (ConfigJson.isMongoDb) {
        return GetDataOnlyFuncDalsForMongoDb();
    };

    return GetFilterFuncDal({ inFilterKey, inFilterValue });
};
export {
    GetFunc, GetDataOnlyFunc, GetImagesFunc, GetBodyCheckFunc, GetFromModalFunc,
    GetFromModalUuidFunc, GetWithJoinsFunc, GetDataSortByColumnFunc, GetRowDataFunc,
    GetMaxRowFunc, GetLastRowFunc, GetFilterFunc
};