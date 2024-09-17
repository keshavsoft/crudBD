import { PostFunc as PostFuncDal } from '../../dals/postFuncs/EntryFile.js';

let PostFunc = ({ inFactory, inPostBody }) => {
    return PostFuncDal({ inFactory, inPostBody });
};

export { PostFunc };