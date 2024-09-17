import { GetFunc as GetFuncDal } from '../../dals/GetFuncs/EntryFile.js';

let GetFunc = ({ inFactory }) => {
    return GetFuncDal({ inFactory });
};

export { GetFunc };