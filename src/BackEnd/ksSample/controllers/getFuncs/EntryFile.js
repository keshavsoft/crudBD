import {
    GetFunc as GetFuncRepo, GetDataOnlyFunc as GetDataOnlyFuncRepo,
    GetFromModalUuidFunc as GetFromModalUuidFuncRepo,
    GetFromModalUuidAndTSFunc as GetFromModalUuidAndTSFuncRepo, GetFromModalFunc as GetFromModalFuncRepo,
    GetIdFunc as GetIdFuncRepo, GetBodyCheckFunc as GetBodyCheckFuncRepo,
    GetRowCountFunc as GetRowCountFuncRepo,
    GetColumnsSchemaFunc as GetColumnsSchemaFuncRepo,
    GetfilterDataFunc as GetfilterDataFuncRepo,
    GetMaxWithKeyFunc as GetMaxWithKeyFuncRepo,
    GetMaxRowFunc as GetMaxRowFuncRepo,
    GetUniqueWithKeyFunc as GetUniqueWithKeyFuncRepo,
    GetRawSqlFunc as GetRawSqlFuncRepo
} from '../../repos/getFuncs/EntryFile.js';


let GetFunc = async (req, res) => {
    let LocalFromRepo = await GetFuncRepo();

    res.json(LocalFromRepo);
};

let GetDataOnlyFunc = async (req, res) => {
    let LocalFromRepo = await GetDataOnlyFuncRepo();

    res.json(LocalFromRepo);
};

let GetIdFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalIfFromParam = LocalParams.id;

    let LocalFromRepo = await GetIdFuncRepo({ inId: LocalIfFromParam });
    console.log("aaaaaaaaaaa : ", LocalFromRepo);
    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.json(LocalFromRepo.JsonData);
};

let GetFromModalFunc = (req, res) => {
    let LocalFromRepo = GetFromModalFuncRepo();
    res.json(LocalFromRepo);
};

let GetFromModalUuidFunc = (req, res) => {
    let LocalFromRepo = GetFromModalUuidFuncRepo();
    res.json(LocalFromRepo);
};

let GetFromModalUuidAndTSFunc = (req, res) => {
    let LocalFromRepo = GetFromModalUuidAndTSFuncRepo();
    res.json(LocalFromRepo);
};

let GetBodyCheckFunc = async (req, res) => {
    let LocalFromRepo = await GetBodyCheckFuncRepo();
    res.json(LocalFromRepo);
};

let GetRowCountFunc = async (req, res) => {
    let LocalFromRepo = await GetRowCountFuncRepo();
    res.json(LocalFromRepo);
};

let GetColumnsSchemaFunc = async (req, res) => {
    let LocalFromRepo = await GetColumnsSchemaFuncRepo();
    console.log("LocalFromRepo : ", LocalFromRepo);
    res.json(LocalFromRepo);
};

let GetFilterDataFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalKeyFromParam = LocalParams.Key;
    let LocalValueFromParam = LocalParams.Value;

    let LocalFromRepo = await GetfilterDataFuncRepo({ inKey: LocalKeyFromParam, inValue: LocalValueFromParam });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.json(LocalFromRepo.JsonData);
};

let GetMaxWithKeyFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalKeyFromParam = LocalParams.Key;

    let LocalFromRepo = await GetMaxWithKeyFuncRepo({ inKey: LocalKeyFromParam });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.json(LocalFromRepo.JsonData);
};

let GetUniqueWithKeyFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalKeyFromParam = LocalParams.Key;

    let LocalFromRepo = await GetUniqueWithKeyFuncRepo({ inKey: LocalKeyFromParam });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.json(LocalFromRepo.JsonData);
};

let GetMaxRowFunc = (req, res) => {
    let LocalFromRepo = GetMaxRowFuncRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.json(LocalFromRepo.JsonData);
};

let GetRawSqlFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalIfFromParam = LocalParams.id;
    let LocalFromRepo = await GetRawSqlFuncRepo({ inId: LocalIfFromParam });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.json(LocalFromRepo.JsonData);
};

export {
    GetFunc, GetDataOnlyFunc, GetFromModalFunc,
    GetFromModalUuidFunc, GetFromModalUuidAndTSFunc,
    GetIdFunc,
    GetBodyCheckFunc, GetRowCountFunc,
    GetColumnsSchemaFunc, GetFilterDataFunc,
    GetMaxWithKeyFunc, GetMaxRowFunc,
    GetUniqueWithKeyFunc, GetRawSqlFunc
};