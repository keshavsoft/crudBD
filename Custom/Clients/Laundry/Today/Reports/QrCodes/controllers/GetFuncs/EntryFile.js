import {
    GetAllFuncs as GetAllFuncsRepo,
    GetInBranchFuncs as GetInBranchFuncsRepo,
    GetToFactoryFuncs as GetToFactoryFuncsRepo
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

export {
    GetAllFuncs, GetInBranchFuncs, GetToFactoryFuncs
};