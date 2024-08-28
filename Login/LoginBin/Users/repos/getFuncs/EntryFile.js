import {
    GetFunc as GetFuncDal, ValidateEmailFunc as ValidateEmailFuncDal,
    GetCreateWithUserFunc as GetCreateWithUserFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetFunc = () => {
    return GetFuncDal();
};

let ValidateEmailFunc = ({ inUuid }) => {
    return ValidateEmailFuncDal({ inUuid });
};

let GetCreateWithUserFunc = ({ inUserName }) => {
    return GetCreateWithUserFuncDal({ inUserName });
};

export { GetFunc, ValidateEmailFunc, GetCreateWithUserFunc };