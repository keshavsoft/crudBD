import {
    GetFunc as GetFuncDal,
    GetAsObjectFunc as GetAsObjectFuncDal,
    GetAsArrayFunc as GetAsArrayFuncDal
}
    from '../../dals/getFuncs/EntryFile.js';

let GetFunc = ({ inFilterObject }) => {
    return GetFuncDal({ inFilterObject });
};

let GetAsObjectFunc = ({ inFilterObject }) => {
    return GetAsObjectFuncDal({ inFilterObject });
};

let GetAsArrayFunc = ({ inFilterObject }) => {
    return GetAsArrayFuncDal({ inFilterObject });
};

export {
    GetFunc, GetAsObjectFunc, GetAsArrayFunc
};