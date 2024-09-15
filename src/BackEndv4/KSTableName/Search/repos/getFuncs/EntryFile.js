import {
    GetFunc as GetFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetFunc = ({ inFilterObject }) => {
    return GetFuncDal({ inFilterObject });
};

export {
    GetFunc
};