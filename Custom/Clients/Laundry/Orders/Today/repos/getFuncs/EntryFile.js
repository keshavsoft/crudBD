import {
    GetWithQrCodesFunc as GetWithQrCodesFuncDal,
    GetReportFunc as GetReportFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetWithQrCodesFunc = async ({ inBranch }) => {
    return GetWithQrCodesFuncDal({ inBranch });
};

let GetReportFunc = async ({ inBranch }) => {
    return GetReportFuncDal({ inBranch });
};

export { GetWithQrCodesFunc, GetReportFunc };