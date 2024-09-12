import {
    GetKeyNameFunc as GetKeyNameFuncRepo
} from '../../repos/getFuncs/EntryFile.js';

let GetKeyNameFunc = async (req, res) => {

    let LocalIfFromParam = req.params;
    let Localid = LocalIfFromParam.id;
    let LocalKey = LocalIfFromParam.inKey;

    let LocalFromRepo = await GetKeyNameFuncRepo({
        inId: Localid,
        inKey: LocalKey,
    });

    if (LocalFromRepo === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

export {
    GetKeyNameFunc
};