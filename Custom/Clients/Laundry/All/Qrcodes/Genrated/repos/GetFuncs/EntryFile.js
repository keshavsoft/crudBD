import {
    GetFuncs as GetFuncsDal

} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = ({ inBranch }) => {
    return GetFuncsDal({ inBranch });
};

export {
    GetFuncs
};