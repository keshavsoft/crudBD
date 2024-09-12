import {
    postFilterDataFromBodyFunc as postFilterDataFromBodyFuncDal,
} from '../../dals/postFuncs/EntryFile.js';

let postFilterDataFromBodyFunc = async ({ inFindKey, inFindValue }) => {
    return postFilterDataFromBodyFuncDal({ inFindKey, inFindValue });
};

export {
    postFilterDataFromBodyFunc
};