import { PostFunc as PostFuncDal } from '../../dals/postFuncs/EntryFile.js';

let PostFunc = ({ inUsername,inPassword }) => {
    return PostFuncDal({ inUsername,inPassword });
};

export { PostFunc };