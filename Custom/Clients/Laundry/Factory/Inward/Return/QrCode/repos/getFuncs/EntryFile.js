import {
    GetRowDataFunc as GetRowDataFuncDal,
} from '../../dals/getFuncs/EntryFile.js';


let GetRowDataFunc = ({ inFactory, inId }) => {
    return GetRowDataFuncDal({ inFactory, inId });
};
export {
    GetRowDataFunc
};