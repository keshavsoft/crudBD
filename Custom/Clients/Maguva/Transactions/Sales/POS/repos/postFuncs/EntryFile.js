import { postFunc as postFuncFromDal } from '../../dals/postFuncs/EntryFile.js';

let postFunc = ({ inPostBody }) => {
    return postFuncFromDal({ inPostBody });
};

export { postFunc };