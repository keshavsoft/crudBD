import {
    postFilterDataFromBodyFunc as postFilterDataFromBodyFuncRepo,
    postMaxRowFunc as postMaxRowFuncRepo

} from '../../repos/postFuncs/EntryFile.js';

let postFilterDataFromBodyFunc = async (req, res) => {
    let LocalFindKey = req.body.FindKey;
    let LocalFindValue = req.body.FindValue;

    let LocalFromRepo = await postFilterDataFromBodyFuncRepo({ inFindKey: LocalFindKey, inFindValue: LocalFindValue });

    if (LocalFromRepo === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);

};

let postMaxRowFunc = async (req, res) => {
    let LocalFindKey = req.body.FindKey;
    let LocalFindValue = req.body.FindValue;

    let LocalFromRepo = await postMaxRowFuncRepo({ inFindKey: LocalFindKey, inFindValue: LocalFindValue });

    if (LocalFromRepo === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);

};

export {
    postFilterDataFromBodyFunc, postMaxRowFunc
};