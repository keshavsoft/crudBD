import {
    GetFunc as GetFuncDal,
    GetRowDataFunc as GetRowDataFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetFunc = async () => {
    return GetFuncDal();
};

let GetRowDataFunc = async ({ inId }) => {
    return GetRowDataFuncDal({ inId });
};

export {
    GetFunc, GetDataOnlyFunc, GetImagesFunc, GetBodyCheckFunc, GetFromModalFunc,
    GetFromModalUuidFunc, GetWithJoinsFunc, GetDataSortByColumnFunc, GetRowDataFunc,
    GetMaxRowFunc, GetLastRowFunc, GetFilterFunc
};