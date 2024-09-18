import {
    GetFunc as GetFuncRepo,
    GetPendingFunc as GetPendingFuncRepo,
    GetScannedFunc as GetScannedFuncRepo
} from '../../repos/getFuncs/EntryFile.js';

let GetFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalFactory = LocalParams.inFactory;
    let LocalFromRepo = GetFuncRepo({ inFactory: LocalFactory });

    res.status(200).json(LocalFromRepo);
};
let GetPendingFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalFactory = LocalParams.inFactory;
    let LocalFromRepo = GetPendingFuncRepo({ inFactory: LocalFactory });

    res.status(200).json(LocalFromRepo);
};
let GetScannedFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalFactory = LocalParams.inFactory;
    let LocalFromRepo = GetScannedFuncRepo({ inFactory: LocalFactory });

    res.status(200).json(LocalFromRepo);
};

export {
    GetFunc, GetPendingFunc, GetScannedFunc
};