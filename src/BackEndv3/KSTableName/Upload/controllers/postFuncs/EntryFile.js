import {
    PostFunc as PostFuncRepo,
    PostImageAndMailFunc as PostImageAndMailFuncRepo
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

let PostImageUsingMulterFunc = async (req, res) => {
    if ("insertedPk" in req.KeshavSoft === false) {
        res.status(500).send("Error from multer");
        return;
    };

    res.status(200).send(`${req.KeshavSoft.insertedPk}`);
};

let PostImageAndMailFunc = async (req, res) => {
    if ("Uuid" in req.KeshavSoft === false) {
        res.status(500).send("Error from multer");
        return;
    };

    let LocalBody = req.body;
    var host = req.get('host');
    let protocol = req.protocol;
    let LocalDomainName = `${protocol}://${host}`;

    PostImageAndMailFuncRepo({
        inDomainName: LocalDomainName,
        inDataToInsert: LocalBody,
        inpk: req.KeshavSoft.insertedPk,
        inImageName: req.KeshavSoft.Uuid
    });

    res.status(200).send(`${req.KeshavSoft.insertedPk}`);
};

let PostImageAndMailFunc1 = async (req, res) => {
    if ("insertedPk" in req.KeshavSoft === false) {
        if ("ErrorInfo" in req.KeshavSoft) {
            res.status(500).json(req.KeshavSoft.ErrorInfo);
            return;
        };

        res.status(500).send("Error from multer");
        return;
    };

    let LocalBody = req.body;
    var host = req.get('host');
    let protocol = req.protocol;
    let LocalDomainName = `${protocol}://${host}`;

    PostImageAndMailFuncRepo({
        inDomainName: LocalDomainName,
        inDataToInsert: LocalBody,
        inpk: req.KeshavSoft.insertedPk
    });

    res.status(200).send(`${req.KeshavSoft.insertedPk}`);
};

export {
    PostFunc, PostImageUsingMulterFunc,
    PostImageAndMailFunc
};