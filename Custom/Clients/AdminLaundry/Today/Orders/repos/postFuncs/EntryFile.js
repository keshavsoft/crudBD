import { PostFunc as PostFuncDal } from '../../dals/postFuncs/EntryFile.js';

let PostFunc = ({ inBranch, inPostBody }) => {
    return PostFuncDal({ inBranch, inPostBody });
};

export { PostFunc };