import { postFunc as postFuncFromRepo } from '../../repos/postFuncs/EntryFile.js';

let postFunc = (req, res) => {
    let LocalBody = req.body;

    let LocalFromRepo = postFuncFromRepo({
        inPostBody: LocalBody
    });

    if (LocalFromRepo.KTF === false) {
        res.status(501).json(LocalFromRepo.KReason);
        return;
    };

    res.json(LocalFromRepo);
};

export { postFunc };