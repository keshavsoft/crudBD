import { GetWithQrCodesFunc as GetWithQrCodesFuncRepo } from '../../repos/getFuncs/EntryFile.js';

let GetWithQrCodesFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch

    let LocalFromRepo = await GetWithQrCodesFuncRepo({ inBranch: LocalBranch });
    res.json(LocalFromRepo);
};


export { GetWithQrCodesFunc };