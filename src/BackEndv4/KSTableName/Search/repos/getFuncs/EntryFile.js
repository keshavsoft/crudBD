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

let GetAsArrayFunc = ({ inKey, inValue }) => {
    return GetAsArrayFuncDal({
        inKey, inValue
    });
};

export {
    GetFunc, GetAsObjectFunc, GetAsArrayFunc
};