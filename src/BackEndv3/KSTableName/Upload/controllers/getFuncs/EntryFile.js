import {
    GetFunc as GetFuncRepo
} from '../../repos/getFuncs/EntryFile.js';

let GetFunc = async (req, res) => {
    let LocalBody = req.body;

    let LocalFromRepo = await GetFuncRepo({ ...LocalBody });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).send(LocalFromRepo.pk.toString());
};

let GetImageUsingMulterFunc = async (req, res) => {
    if ("insertedPk" in req.KeshavSoft === false) {
        res.status(500).send("Error from multer");
        return;
    };

    res.status(200).send(`${req.KeshavSoft.insertedPk}`);
};

export {
    GetFunc, GetImageUsingMulterFunc
};