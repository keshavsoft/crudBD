import { GetFunc as GetFuncRepo } from '../../repos/GetFuncs/EntryFile.js';

let GetFunc = (req, res) => {
    let LocalParams = req.params;
    let LocalFactory = LocalParams.inFactory;
    let LocalFromRepo = GetFuncRepo({ inFactory: LocalFactory });
    res.json(LocalFromRepo);

};

export { GetFunc };