import { GetFunc as GetFuncDal } from '../../dals/getFuncs/EntryFile.js';

let GetFunc = async () => {
    return GetFuncDal();
};

export { GetFunc };