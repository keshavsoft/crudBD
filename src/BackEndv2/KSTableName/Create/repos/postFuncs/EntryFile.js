import {
    PostFunc as PostFuncDal,
    PostFuncGenUuId as PostFuncGenUuIdDal
} from '../../dals/postFuncs/EntryFile.js';

import {
    PostFunc as PostFuncDalsForSequelize
} from '../../dalsForSequelize/postFuncs/EntryFile.js';

import {
    PostFunc as PostFuncDalsForMongoDB
} from '../../dalsForMongoDb/postFuncs/EntryFile.js';

import ConfigJson from '../../../../Config.json' assert {type: 'json'};

let PostFunc = async (inPostBody) => {
    if (ConfigJson.isSequelize) {
       return PostFuncDalsForSequelize(inPostBody);
    };

    if (ConfigJson.isMongoDb) {
       return PostFuncDalsForMongoDB(inPostBody);
    };

    return PostFuncDal(inPostBody);
};
let PostFuncGenUuId = async (inPostBody) => {
    if (ConfigJson.isSequelize) {
       return PostFuncDalsForSequelize(inPostBody);
    };

    if (ConfigJson.isMongoDb) {
       return PostFuncDalsForMongoDB(inPostBody);
    };

    return PostFuncGenUuIdDal(inPostBody);
};

export {
    PostFunc, PostFuncGenUuId
};