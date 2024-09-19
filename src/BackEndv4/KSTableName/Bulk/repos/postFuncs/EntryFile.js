import {
    PostFunc as PostFuncDal,
    MultiInsertWithCheckFunc as MultiInsertWithCheckFuncDal
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
        return await PostFuncDalsForSequelize(inPostBody);
    };

    if (ConfigJson.isMongoDb) {
        return PostFuncDalsForMongoDB(inPostBody);
    };

    return PostFuncDal(inPostBody);
};

let MultiInsertWithCheckFunc = ({ inArrayToInsert }) => {
    return MultiInsertWithCheckFuncDal({ inArrayToInsert });
};

export {
    PostFunc, MultiInsertWithCheckFunc
};