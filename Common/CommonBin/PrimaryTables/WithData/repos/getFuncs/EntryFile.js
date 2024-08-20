import { GetFunc as GetFuncDal } from '../../dals/getFuncs/EntryFile.js';
import { GetAllUniquesFunc as GetAllUniquesFuncDal } from '../../dals/getFuncs/EntryFile.js';


let GetFunc = () => {
    return GetFuncDal();
};
let GetAllUniquesFunc = () => {
    return GetAllUniquesFuncDal();
};

export { GetFunc, GetAllUniquesFunc };