import {
    PostFunc as PostFuncDal
} from '../../dals/postFuncs/EntryFile.js';

let PostFunc = ({ inFactory, inDataInsert }) => {
    return PostFuncDal({ inFactory, inDataInsert });
};

export {
    PostFunc
};