import {
    PostFunc as PostFuncRepo,
    PostFuncGenUuId as PostFuncGenUuIdRepo,
    PostWithCheckAndGenPkFunc as PostWithCheckAndGenPkFuncRepo
} from '../../repos/postFuncs/EntryFile.js';

let PostFunc = async (req, res) => {
    let LocalBody = req.body;

    let LocalFromRepo = await PostFuncRepo({ ...LocalBody });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).send(LocalFromRepo.pk.toString());
};

let PostFuncGenUuId = async (req, res) => {
    let LocalBody = req.body;

    let LocalFromRepo = await PostFuncGenUuIdRepo({ ...LocalBody });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).send(LocalFromRepo.pk.toString());
};

let PostWithCheckAndGenPkFunc = async (req, res) => {
    let LocalBody = req.body;

    let LocalFromRepo = await PostWithCheckAndGenPkFuncRepo({ ...LocalBody });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).send(LocalFromRepo.pk.toString());
};

export {
    PostFunc, PostFuncGenUuId, PostWithCheckAndGenPkFunc
};