import {
    GetFunc as GetFuncRepo, GetRowDataFunc as GetRowDataFuncRepo,
    GetAnyExtFunc as GetAnyExtFuncRepo
} from '../../repos/getFuncs/EntryFile.js';

let GetFunc = async (req, res) => {
    let LocalFromRepo = await GetFuncRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

let GetRowDataFunc = (req, res) => {
    let localid = req.params.id

    GetRowDataFuncRepo({ inId: localid, inResponse: res });
};

let GetAnyExtFunc = (req, res) => {
    let localid = req.params.id

    GetAnyExtFuncRepo({ inId: localid, inResponse: res });
};

export {
    GetFunc, GetRowDataFunc, GetAnyExtFunc
};