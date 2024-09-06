import { PostFunc as PostFuncDal } from '../../dals/postFuncs/EntryFile.js';

let PostFunc = async ({ inBranch, inPostBody }) => {
    return PostFuncDal({ inBranch, inPostBody });
};

export { PostFunc };