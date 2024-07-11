import { GetFunc as GetFuncDal } from '../../dals/getFuncs/EntryFile.js';

let GetFunc = ({ inResponse, callback }) => {
    return GetFuncDal({ inResponse, callback });
};

export { GetFunc };