import {
    GetKeyNameFunc as GetKeyNameFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetKeyNameFunc = ({ inId, inKey}) => {
    return GetKeyNameFuncDal({ inId, inKey});
};

export {
    GetKeyNameFunc
};