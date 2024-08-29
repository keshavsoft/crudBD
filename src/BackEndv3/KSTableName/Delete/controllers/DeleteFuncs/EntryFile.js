import { DeleteFunc as DeleteFuncRepo } from '../../repos/DeleteFuncs/EntryFile.js';

let DeleteFunc = async (req, res) => {
    let LocalId = req.params.Id;

    let LocalFromRepo = await DeleteFuncRepo({ inId: LocalId });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.json(LocalFromRepo);
};

export { DeleteFunc };