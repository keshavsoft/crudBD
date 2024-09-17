import {
    GetFunc as GetFuncRepo,
    GetAsObjectFunc as GetAsObjectFuncRepo,
    GetAsArrayFunc as GetAsArrayFuncRepo
} from '../../repos/getFuncs/EntryFile.js';

let GetFunc = async (req, res) => {
    let LocalFilterObject = req.query;

    let LocalFromRepo = GetFuncRepo({ inFilterObject: LocalFilterObject });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo.JsonData);
};

let GetAsObjectFunc = async (req, res) => {
    let LocalFilterObject = req.query;

    let LocalFromRepo = GetAsObjectFuncRepo({ inFilterObject: LocalFilterObject });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo.JsonData);
};

let GetAsArrayFunc = async (req, res) => {
    let LocalFilterKey = req.query.Key;
    let LocalFilterValue = req.query.Value;

    let LocalFromRepo = GetAsArrayFuncRepo({
        inKey: LocalFilterKey,
        inValue: LocalFilterValue
    });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo.JsonData);
};

export {
    GetFunc, GetAsObjectFunc, GetAsArrayFunc
};