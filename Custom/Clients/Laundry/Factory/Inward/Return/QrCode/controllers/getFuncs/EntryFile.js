import {
    GetRowDataFunc as GetRowDataFuncRepo,
} from '../../repos/getFuncs/EntryFile.js';

let GetRowDataFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalFactory = LocalParams.inFactory;
    let Localid = LocalParams.inid;
    let LocalFromRepo = GetRowDataFuncRepo({ inFactory: LocalFactory, inId: Localid, });

    res.status(200).json(LocalFromRepo);
};

export {
    GetRowDataFunc
};