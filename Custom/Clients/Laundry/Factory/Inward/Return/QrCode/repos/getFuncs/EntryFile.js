import {
    GetFunc as GetFuncDal,
    GetPendingFunc as GetPendingFuncDal,
    GetScannedFunc as GetScannedFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetFunc = ({ inFactory }) => {
    return GetFuncDal({ inFactory });
};
let GetPendingFunc = ({ inFactory }) => {
    return GetPendingFuncDal({ inFactory });
};
let GetScannedFunc = ({ inFactory }) => {
    return GetScannedFuncDal({ inFactory });
};
export {
    GetFunc, GetPendingFunc, GetScannedFunc
};