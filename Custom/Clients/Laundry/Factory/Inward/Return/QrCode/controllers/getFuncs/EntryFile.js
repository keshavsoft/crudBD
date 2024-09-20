import {
    GetRowDataFunc as GetRowDataFuncRepo,
    GetRowQrDataFunc as GetRowQrDataFuncRepo,
} from '../../repos/getFuncs/EntryFile.js';

let GetRowDataFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalFactory = LocalParams.inFactory;
    let Localid = LocalParams.id;
    let LocalFromRepo = GetRowDataFuncRepo({ inFactory: LocalFactory, inId: Localid, });

    res.status(200).json(LocalFromRepo);
};

let GetRowQrDataFunc = async (req, res) => {
    let LocalParams = req.params;
    let Localid = LocalParams.id;
    let LocalFromRepo = GetRowQrDataFuncRepo({ inId: Localid, });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo.JsonData);
};

export {
    GetRowDataFunc, GetRowQrDataFunc
};