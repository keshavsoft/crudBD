import {
    GetKeyNameFunc as GetKeyNameFuncRepo
} from '../../repos/getFuncs/EntryFile.js';

let GetKeyNameFunc = async (req, res) => {
    let LocalFromRepo = await GetKeyNameFuncRepo();

    if (LocalFromRepo === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

export {
    GetKeyNameFunc
};