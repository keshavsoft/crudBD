import { GetFunc as GetFuncRepo } from '../../repos/getFuncs/EntryFile.js';
import { GetAllUniquesFunc as GetAllUniquesFuncRepo } from '../../repos/getFuncs/EntryFile.js';


let GetFunc = async (req, res) => {
    let LocalFromRepo = await GetFuncRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.json(LocalFromRepo.JsonData);
};
let GetAllUniquesFunc = async (req, res) => {
    let LocalFromRepo = await GetAllUniquesFuncRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.json(LocalFromRepo.JsonData);
};

export { GetFunc, GetAllUniquesFunc };