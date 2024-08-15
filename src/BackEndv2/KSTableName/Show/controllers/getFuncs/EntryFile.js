import {
    GetFunc as GetFuncRepo, GetDataOnlyFunc as GetDataOnlyFuncRepo,
    GetImagesFunc as GetImagesFuncRepo,
    GetBodyCheckFunc as GetBodyCheckFuncRepo,
    GetFromModalFunc as GetFromModalFuncRepo,
    GetFromModalUuidFunc as GetFromModalUuidFuncRepo,
    GetWithJoinsFunc as GetWithJoinsFuncRepo,
    GetDataSortByColumnFunc as GetDataSortByColumnFuncRepo
} from '../../repos/getFuncs/EntryFile.js';

let GetFunc = async (req, res) => {
    let LocalFromRepo = await GetFuncRepo();

    res.json(LocalFromRepo);
};

let GetDataOnlyFunc = async (req, res) => {
    let LocalFromRepo = await GetDataOnlyFuncRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    // res.json(LocalFromRepo.JsonData);
    // res.sendStatus(200);
    res.status(200).json(LocalFromRepo.JsonData);
};

let GetDataSortByColumnFunc = async (req, res) => {
    let LocalFromRepo = await GetDataSortByColumnFuncRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).send(JSON.stringify(LocalFromRepo.JsonData));
};

let GetImagesFunc = async (req, res) => {
    let LocalFromRepo = await GetImagesFuncRepo();

    res.status(200).send(JSON.stringify(LocalFromRepo));

};
let GetBodyCheckFunc = async (req, res) => {
    let LocalFromRepo = await GetBodyCheckFuncRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).send(JSON.stringify(LocalFromRepo));
};
let GetFromModalFunc = async (req, res) => {
    let LocalFromRepo = await GetFromModalFuncRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).send(JSON.stringify(LocalFromRepo));
};
let GetFromModalUuidFunc = async (req, res) => {
    let LocalFromRepo = await GetFromModalUuidFuncRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).send(JSON.stringify(LocalFromRepo.JsonData));
};
let GetWithJoinsFunc = async (req, res) => {
    let LocalFromRepo = await GetWithJoinsFuncRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).send(JSON.stringify(LocalFromRepo.JsonData));
};

export {
    GetFunc, GetDataOnlyFunc, GetImagesFunc, GetBodyCheckFunc, GetFromModalFunc,
    GetFromModalUuidFunc, GetWithJoinsFunc, GetDataSortByColumnFunc
};