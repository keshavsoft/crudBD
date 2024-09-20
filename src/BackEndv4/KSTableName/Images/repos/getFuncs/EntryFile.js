import {
    GetFunc as GetFuncDal,
    GetRowDataFunc as GetRowDataFuncDal,
    GetAnyExtFunc as GetAnyExtFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetFunc = async () => {
    return GetFuncDal();
};

let GetRowDataFunc = ({ inId, inResponse }) => {
    return GetRowDataFuncDal({ inId, inResponse });
};

let GetAnyExtFunc = ({ inId, inResponse }) => {
    return GetAnyExtFuncDal({ inId, inResponse });
};

export {
    GetFunc, GetRowDataFunc, GetAnyExtFunc
};