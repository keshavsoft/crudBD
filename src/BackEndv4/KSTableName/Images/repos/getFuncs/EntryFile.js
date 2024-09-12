import {
    GetFunc as GetFuncDal,
    GetRowDataFunc as GetRowDataFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetFunc = async () => {
    return GetFuncDal();
};

let GetRowDataFunc = ({ inId, inResponse }) => {
    return GetRowDataFuncDal({ inId, inResponse });
};

export {
    GetFunc, GetRowDataFunc
};