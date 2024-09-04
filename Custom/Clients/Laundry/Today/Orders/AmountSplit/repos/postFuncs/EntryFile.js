import {
    PostFunc as PostFuncDal,
    PostImageUsingMulterFunc as PostImageUsingMulterFuncDal

} from '../../dals/postFuncs/EntryFile.js';

let PostFunc = async (inPostBody) => {
    return PostFuncDal(inPostBody);
};

let PostImageUsingMulterFunc = async (inPostBody) => {
    return PostImageUsingMulterFuncDal(inPostBody);
};

export {
    PostFunc, PostImageUsingMulterFunc
};