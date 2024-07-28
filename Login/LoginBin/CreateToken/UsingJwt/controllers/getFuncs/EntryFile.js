import { GetFunc as GetFuncRepo } from '../../repos/getFuncs/EntryFile.js';

let GetFunc = (req, res) => {
    let LocalFromRepo = GetFuncRepo();

    res.json(LocalFromRepo);
};

let GetRemoveTokenFunc = (req, res) => {
    res.cookie('KSToken', "Killed", { maxAge: 900000, httpOnly: false });
    res.status(200);
};

export { GetFunc, GetRemoveTokenFunc };