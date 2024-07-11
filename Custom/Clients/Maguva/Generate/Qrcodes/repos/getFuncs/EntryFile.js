import { GetIdFunc as GetIdFuncDal } from '../../dals/getFuncs/EntryFile.js';

let GetIdFunc = async ({ inId }) => {
    return GetIdFuncDal({ inId });
};

export { GetIdFunc };