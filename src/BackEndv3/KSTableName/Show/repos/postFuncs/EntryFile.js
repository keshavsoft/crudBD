import {
    postFilterDataFromBodyFunc as postFilterDataFromBodyFuncDal,
    postMaxRowFunc as postMaxRowFuncDal
} from '../../dals/postFuncs/EntryFile.js';

let postFilterDataFromBodyFunc = async ({ inFindKey, inFindValue }) => {
    return postFilterDataFromBodyFuncDal({ inFindKey, inFindValue });
};

let postMaxRowFunc = async ({ inFindKey, inFindValue }) => {
    return postMaxRowFuncDal({ inFindKey, inFindValue });
};

export {
    postFilterDataFromBodyFunc, postMaxRowFunc
};