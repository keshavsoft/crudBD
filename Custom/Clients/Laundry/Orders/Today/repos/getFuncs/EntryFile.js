import { GetWithQrCodesFunc as GetWithQrCodesFuncDal } from '../../dals/getFuncs/EntryFile.js';

let GetWithQrCodesFunc = async ({ inBranch }) => {
    return GetWithQrCodesFuncDal({ inBranch });
};

export { GetWithQrCodesFunc };