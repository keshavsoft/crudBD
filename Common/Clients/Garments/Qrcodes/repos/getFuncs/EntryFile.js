import { GetIdFunc as GetIdFuncDal } from '../../dals/getFuncs/EntryFile.js';
import { GetIdWithTableFunc as GetIdWithTableFuncDal } from '../../dals/getFuncs/EntryFile.js';

let GetIdFunc = async ({ inId }) => {
    return GetIdFuncDal({ inId });
};

let GetIdWithTableFunc = async ({ inTable, inId }) => {
    return GetIdWithTableFuncDal({ inTable, inId });
};

export { GetIdFunc, GetIdWithTableFunc };