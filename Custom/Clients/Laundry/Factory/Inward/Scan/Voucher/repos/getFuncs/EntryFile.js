import {
    GetFunc as GetFuncDal,
    GetQrStatusFunc as GetQrStatusFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetFunc = ({ inFactory }) => {
    return GetFuncDal({ inFactory });
};

let GetQrStatusFunc = ({ inFactory }) => {
    return GetQrStatusFuncDal({ inFactory });
};

export {
    GetFunc, GetQrStatusFunc
};