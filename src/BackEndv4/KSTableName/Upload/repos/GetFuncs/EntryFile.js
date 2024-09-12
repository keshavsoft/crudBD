import {
    GetFunc as GetFuncDal,
    GetImageUsingMulterFunc as GetImageUsingMulterFuncDal

} from '../../dals/GetFuncs/EntryFile.js';

import {
    GetFunc as GetFuncDalsForSequelize
} from '../../dalsForSequelize/GetFuncs/EntryFile.js';

import {
    GetFunc as GetFuncDalsForMongoDB
} from '../../dalsForMongoDb/getFuncs/EntryFile.js';

import ConfigJson from '../../../../Config.json' assert {type: 'json'};

let GetFunc = async (inPostBody) => {
    if (ConfigJson.isSequelize) {
        return await PostFuncDalsForSequelize(inPostBody);
    };

    if (ConfigJson.isMongoDb) {
        return PostFuncDalsForMongoDB(inPostBody);
    };

    return GetFuncDal(inPostBody);
};

let GetImageUsingMulterFunc = async (inPostBody) => {
    if (ConfigJson.isSequelize) {
        return await PostFuncDalsForSequelize(inPostBody);
    };

    if (ConfigJson.isMongoDb) {
        return PostFuncDalsForMongoDB(inPostBody);
    };

    return GetImageUsingMulterFuncDal(inPostBody);
};

export {
    GetFunc, GetImageUsingMulterFunc
};