import {
    PostFunc as PostFuncRepo
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

export {
    PostFunc, PostImageUsingMulterFunc
};