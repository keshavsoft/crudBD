import { GetFunc as GetFuncDal, ValidateEmailFunc as ValidateEmailFuncDal } from '../../dals/getFuncs/EntryFile.js';

let GetFunc = () => {
    return GetFuncDal();
};

let ValidateEmailFunc = ({inUuid}) => {
    return ValidateEmailFuncDal({inUuid});
};

export { GetFunc, ValidateEmailFunc };