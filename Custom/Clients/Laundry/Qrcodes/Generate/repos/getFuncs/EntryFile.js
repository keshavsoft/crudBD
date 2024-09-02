import { GetIdFunc as GetIdFuncDal } from '../../dals/getFuncs/EntryFile.js';

let GetIdFunc = async ({ inBranch, inId }) => {
    return GetIdFuncDal({ inBranch, inId });
};

export { GetIdFunc };