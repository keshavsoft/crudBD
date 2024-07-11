import { postFunc as postFuncFromDal } from '../../dals/postFuncs/EntryFile.js';

let postFunc = async ({ inBranchName, inPostBody }) => {
    return postFuncFromDal({ inBranchName, inPostBody });
};

export { postFunc };