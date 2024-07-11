import { GetIdFunc as GetIdFuncRepo } from '../../repos/getFuncs/EntryFile.js';
import { GetIdWithTableFunc as GetIdWithTableFuncRepo } from '../../repos/getFuncs/EntryFile.js';

let GetIdFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalIfFromParam = LocalParams.id;

    let LocalFromRepo = await GetIdFuncRepo({ inId: LocalIfFromParam });
    res.json(LocalFromRepo);
};

let GetIdWithTableFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalinTableFromParam = LocalParams.inTable;
    let LocalIdFromParam = LocalParams.id;

    let LocalFromRepo = await GetIdWithTableFuncRepo({ inTable: LocalinTableFromParam, inId: LocalIdFromParam });
    res.json(LocalFromRepo);
};

export { GetIdFunc, GetIdWithTableFunc };