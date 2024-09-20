import {
    GetRowDataFunc as GetRowDataFuncDal,
    GetRowQrDataFunc as GetRowQrDataFuncDal,
} from '../../dals/getFuncs/EntryFile.js';


let GetRowDataFunc = ({ inFactory, inId }) => {
    return GetRowDataFuncDal({ inFactory, inId });
};

let GetRowQrDataFunc = ({ inId }) => {
    return GetRowQrDataFuncDal({ inId });
};
export {
    GetRowDataFunc, GetRowQrDataFunc
};