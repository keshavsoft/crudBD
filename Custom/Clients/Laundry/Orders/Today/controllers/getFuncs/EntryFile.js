import {
    GetWithQrCodesFunc as GetWithQrCodesFuncRepo,
    GetReportFunc as GetReportFuncRepo
} from '../../repos/getFuncs/EntryFile.js';

let GetWithQrCodesFunc = async (req, res) => {

    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch

    let LocalFromRepo = await GetWithQrCodesFuncRepo({ inBranch: LocalBranch });
    res.json(LocalFromRepo);
};

let GetReportFunc = async (req, res) => {

    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch

    let LocalFromRepo = await GetReportFuncRepo({ inBranch: LocalBranch });
    res.json(LocalFromRepo);
};


export { GetWithQrCodesFunc, GetReportFunc };