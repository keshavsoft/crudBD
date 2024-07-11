import {
    PostFunc as PostFuncDal,
    PostFromModalFunc as PostFromModalFuncDal,
    PostUploadFunc as PostUploadFuncDal, PostGetSelectColumnsFunc as PostGetSelectColumnsFuncDal,
    PostUploadFromModalFunc as PostUploadFromModalFuncDal,
    PostWithKeysCheckFunc as PostWithKeysCheckFuncDal,
    PostFuncGenUuId as PostFuncGenUuIdDal, PostFilterFunc as PostFilterFuncDal,
    PostWithCheckAndGenPkFunc as PostWithCheckAndGenPkFuncDal,
    MultiInsertWithCheckFunc as MultiInsertWithCheckFuncDal,
    PostCustomPkFunc as PostCustomPkFuncDal
} from '../../dals/postFuncs/EntryFile.js';

import {
    PostFunc as PostFuncDalsForSequelize,
    PostUploadFromModalFunc as PostUploadFromModalFuncDalsForSequelize,
    MultiInsertWithCheckFunc as MultiInsertWithCheckFuncDalsForSequelize
} from '../../dalsForSequelize/postFuncs/EntryFile.js';
import {
    PostFunc as PostFuncDalsForMongoDB
} from '../../dalsForMongoDb/postFuncs/EntryFile.js';

import ConfigJson from '../../../Config.json' assert {type: 'json'};

let PostFunc = async (inPostBody) => {
    if (ConfigJson.isSequelize) {
        return PostFuncDalsForSequelize(inPostBody);
    };

    if (ConfigJson.isMongoDb) {
        return PostFuncDalsForMongoDB(inPostBody);
    };
    return PostFuncDal(inPostBody);
};

let PostCustomPkFunc = async (inPostBody) => {
    if (ConfigJson.isSequelize) {
        return PostFuncDalsForSequelize(inPostBody);
    };

    if (ConfigJson.isMongoDb) {
        return PostFuncDalsForMongoDB(inPostBody);
    };
    return PostCustomPkFuncDal(inPostBody);
};

let PostFuncGenUuId = async (inPostBody) => {
    if (ConfigJson.isSequelize) {
        return PostFuncDalsForSequelize(inPostBody);
    };

    return PostFuncGenUuIdDal(inPostBody);
};

let PostFilterFunc = async ({ inFilterCondition }) => {
    return PostFilterFuncDal({ inFilterCondition });
};

let PostFromModalFunc = ({ LocalBodyAsModal }) => {
    return PostFromModalFuncDal({ LocalBodyAsModal });
};

let PostUploadFunc = ({ LocalBodyAsModal }) => {
    return PostUploadFuncDal({ LocalBodyAsModal });
};

let PostUploadFromModalFunc = async ({ inArrayFromRequest }) => {
    if (ConfigJson.isSequelize) {
        return await PostUploadFromModalFuncDalsForSequelize(inPostBody);
    };

    return PostUploadFromModalFuncDal({ inArrayFromRequest });
};

let MultiInsertWithCheckFunc = async ({ inArrayFromRequest }) => {
    if (ConfigJson.isSequelize) {
        return await MultiInsertWithCheckFuncDalsForSequelize(inArrayFromRequest);
    };

    return MultiInsertWithCheckFuncDal({ inArrayFromRequest });
};

let PostGetSelectColumnsFunc = ({ LocalBodyAsModal }) => {
    return PostGetSelectColumnsFuncDal({ LocalBodyAsModal });
};

let PostWithKeysCheckFunc = async (inModalObject) => {
    return PostWithKeysCheckFuncDal({ inBodyKeys: inModalObject });
};

let PostWithCheckAndGenPkFunc = async (inModalObject) => {
    return PostWithCheckAndGenPkFuncDal({ inBodyKeys: inModalObject });
};

export {
    PostFunc, PostFromModalFunc,
    PostUploadFunc, PostGetSelectColumnsFunc,
    PostUploadFromModalFunc, PostFilterFunc,
    PostWithKeysCheckFunc, PostFuncGenUuId,
    PostWithCheckAndGenPkFunc, MultiInsertWithCheckFunc, PostCustomPkFunc
};