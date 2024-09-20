import {
    GetFunc as GetFuncDal,
    GetPendingFunc as GetPendingFuncDal,
    GetScannedFunc as GetScannedFuncDal,
    GetRowDataFunc as GetRowDataFuncDal
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

let GetRowDataFunc = ({ inFactory, inId }) => {
    return GetRowDataFuncDal({ inFactory, inId });
};
export {
    GetFunc, GetPendingFunc, GetScannedFunc, GetRowDataFunc
};