import { DeleteFunc as DeleteFuncDal } from '../../dals/deleteFuncs/EntryFile.js';

let DeleteFunc = ({InId}) => {
    return DeleteFuncDal({InId});
};

export { DeleteFunc };