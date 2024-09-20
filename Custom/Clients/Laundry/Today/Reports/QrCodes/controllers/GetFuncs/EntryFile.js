import {
    GetAllFuncs as GetAllFuncsRepo,
    GetInBranchFuncs as GetInBranchFuncsRepo,
    GetToFactoryFuncs as GetToFactoryFuncsRepo,
    GetFactoryScanFuncs as GetFactoryScanFuncsRepo,
    GetFactoryReturnFuncs as GetFactoryReturnFuncsRepo
} from '../../repos/GetFuncs/EntryFile.js';

let GetAllFuncs = (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch

    let LocalFromRepo = GetAllFuncsRepo({ inBranch: LocalBranch });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

let GetInBranchFuncs = (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch

    let LocalFromRepo = GetInBranchFuncsRepo({ inBranch: LocalBranch });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

let GetToFactoryFuncs = (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch

    let LocalFromRepo = GetToFactoryFuncsRepo({ inBranch: LocalBranch });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

let GetFactoryScanFuncs = (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch

    let LocalFromRepo = GetFactoryScanFuncsRepo({ inBranch: LocalBranch });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

let GetFactoryReturnFuncs = (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch

    let LocalFromRepo = GetFactoryReturnFuncsRepo({ inBranch: LocalBranch });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

export {
    GetAllFuncs, GetInBranchFuncs, GetToFactoryFuncs, GetFactoryScanFuncs, GetFactoryReturnFuncs
};