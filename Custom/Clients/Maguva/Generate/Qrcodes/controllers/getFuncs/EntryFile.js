import { GetIdFunc as GetIdFuncRepo } from '../../repos/getFuncs/EntryFile.js';

let GetIdFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalIfFromParam = LocalParams.id;

    let LocalFromRepo = await GetIdFuncRepo({ inId: LocalIfFromParam });
    res.json(LocalFromRepo);
};


export { GetIdFunc };