import {
    GetFunc as GetFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetFunc = ({ inFactory }) => {
    return GetFuncDal({ inFactory });
};

export {
    GetFunc
};