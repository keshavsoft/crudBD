import {
    PostFunc as PostFuncRepo,
    PostFuncGenUuId as PostFuncGenUuIdRepo,
    PostWithCheckAndGenPkFunc as PostWithCheckAndGenPkFuncRepo,
    PostSendMailGenUuIdFunc as PostSendMailGenUuIdFuncRepo,
    PostSendMailFunc as PostSendMailFuncRepo
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
let PostSendMailGenUuIdFunc = async (req, res) => {
    let LocalBody = req.body;

    let LocalFromRepo = await PostSendMailGenUuIdFuncRepo({ ...LocalBody });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).send(LocalFromRepo.pk.toString());
};

let PostSendMailFunc = async (req, res) => {
    let LocalBody = req.body;
    var host = req.get('host');
    let protocol = req.protocol;
    let LocalDomainName = `${protocol}://${host}`

    let LocalFromRepo = await PostSendMailFuncRepo({
        inPostBody: LocalBody,
        inDomainName: LocalDomainName
    });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).send(LocalFromRepo);
};

export {
    PostFunc, PostFuncGenUuId, PostWithCheckAndGenPkFunc,
    PostSendMailGenUuIdFunc, PostSendMailFunc
};