import { DeleteFunc as DeleteFuncDal,
    ReferenceCheckFunc as ReferenceCheckFuncDal
 } from '../../dals/DeleteFuncs/EntryFile.js';
import { DeleteFunc as DeleteFuncDalsForMongoDB } from '../../dalsForMongoDb/DeleteFuncs/EntryFile.js';

import ConfigJson from '../../../../../Config.json' assert {type: 'json'};

import { DeleteFunc as DeleteFuncDalForSequalize } from '../../dalsForSequelize/DeleteFuncs/EntryFile.js';

let DeleteFunc = async ({ inId }) => {
    if (ConfigJson.isSequelize) {
        return await DeleteFuncDalForSequalize({ inId });
    }

    if (ConfigJson.isMongoDb) {
        return await DeleteFuncDalsForMongoDB({ inId });
    };
    return await DeleteFuncDal({ inId });
};
let ReferenceCheckFunc = async ({ inId }) => {
    if (ConfigJson.isSequelize) {
        return await DeleteFuncDalForSequalize({ inId });
    }

    if (ConfigJson.isMongoDb) {
        return await DeleteFuncDalsForMongoDB({ inId });
    };
    return await ReferenceCheckFuncDal({ inId });
};

export { DeleteFunc, ReferenceCheckFunc };