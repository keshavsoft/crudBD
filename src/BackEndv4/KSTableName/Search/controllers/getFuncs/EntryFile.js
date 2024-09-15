import {
    GetFunc as GetFuncRepo
} from '../../repos/getFuncs/EntryFile.js';

let GetFunc = async (req, res) => {
    let LocalFilterObject = req.query;

    let LocalFromRepo = GetFuncRepo({ inFilterObject: LocalFilterObject });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

export {
    GetFunc
};