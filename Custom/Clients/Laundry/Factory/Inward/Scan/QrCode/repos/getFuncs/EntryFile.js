import {
    GetFunc as GetFuncDal,
    GetPendingFunc as GetPendingFuncDal,
    GetScannedFunc as GetScannedFuncDal,
    GetRowDataFunc as GetRowDataFuncDal,
    GetReturnsFunc as GetReturnsFuncDal,
    GetRowQrDataFunc as GetRowQrDataFuncDal

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

let GetReturnsFunc = ({ inFactory }) => {
    return GetReturnsFuncDal({ inFactory });
};

let GetRowDataFunc = ({ inFactory, inId }) => {
    return GetRowDataFuncDal({ inFactory, inId });
};

let GetRowQrDataFunc = ({ inId }) => {
    return GetRowQrDataFuncDal({ inId });
};
export {
    GetFunc, GetPendingFunc, GetScannedFunc, GetRowDataFunc, GetReturnsFunc, GetRowQrDataFunc
};