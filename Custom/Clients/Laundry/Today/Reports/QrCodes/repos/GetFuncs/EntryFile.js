import {
    GetAllFuncs as GetAllFuncsDal,
    GetInBranchFuncs as GetInBranchFuncsDal,
    GetToFactoryFuncs as GetToFactoryFuncsDal

} from '../../dals/GetFuncs/EntryFile.js';

let GetAllFuncs = ({ inBranch }) => {
    return GetAllFuncsDal({ inBranch });
};

let GetInBranchFuncs = ({ inBranch }) => {
    return GetInBranchFuncsDal({ inBranch });
};

let GetToFactoryFuncs = ({ inBranch }) => {
    return GetToFactoryFuncsDal({ inBranch });
};

export {
    GetAllFuncs, GetInBranchFuncs, GetToFactoryFuncs
};