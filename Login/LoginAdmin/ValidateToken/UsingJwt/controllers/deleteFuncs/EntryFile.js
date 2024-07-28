import { DeleteFunc as DeleteFuncRepo } from '../../repos/deleteFuncs/EntryFile.js';

let DeleteFunc = async (req, res) => {
    let LocalParams=req.params;
    let LocalId=LocalParams.Id;

    let LocalFromRepo = await DeleteFuncRepo({InId:LocalId});
    
    res.json(LocalFromRepo);
};

export { DeleteFunc };