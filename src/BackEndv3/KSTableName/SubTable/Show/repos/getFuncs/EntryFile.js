import {
    GetKeyNameFunc as GetKeyNameFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetKeyNameFunc = () => {
    return GetKeyNameFuncDal();
};

export {
    GetKeyNameFunc
};