import {
    GetAllFuncs as GetAllFuncsDal,
    GetInBranchFuncs as GetInBranchFuncsDal,
    GetToFactoryFuncs as GetToFactoryFuncsDal,
    GetFactoryScanFuncs as GetFactoryScanFuncsDal,
    GetFactoryReturnFuncs as GetFactoryReturnFuncsDal
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

let GetFactoryScanFuncs = ({ inBranch }) => {
    return GetFactoryScanFuncsDal({ inBranch });
};

let GetFactoryReturnFuncs = ({ inBranch }) => {
    return GetFactoryReturnFuncsDal({ inBranch });
};

export {
    GetAllFuncs, GetInBranchFuncs, GetToFactoryFuncs, GetFactoryScanFuncs, GetFactoryReturnFuncs
};