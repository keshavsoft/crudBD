import {
    postFilterDataFromBodyFunc as postFilterDataFromBodyFuncDal,
} from '../../dals/postFuncs/EntryFile.js';

import {
    GetDataOnlyFunc as GetDataOnlyFuncDalsForSequelize
} from '../../dalsForSequelize/postFuncs/EntryFile.js';

import {
    GetDataOnlyFunc as GetDataOnlyFuncDalsForMongoDb
} from '../../dalsForMongoDb/postFuncs/EntryFile.js';

import ConfigJson from '../../../../Config.json' assert {type: 'json'};

let postFilterDataFromBodyFunc = async ({ inFindKey, inFindValue }) => {
    return postFilterDataFromBodyFuncDal({ inFindKey, inFindValue });
};

export {
    postFilterDataFromBodyFunc
};