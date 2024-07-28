import { PutFunc as PutFuncDal } from '../../dals/putFuncs/EntryFile.js';

let PutFunc = ({ inDataToUpdate, inId }) => {
    return PutFuncDal({ inDataToUpdate, inId });
};

export { PutFunc };