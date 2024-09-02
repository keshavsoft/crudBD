import { StartFunc as TodayOrdersWithQrs } from '../../kLowDb/ReadFileList/TodayOrdersWithQrs.js';

let GetWithQrCodesFunc = ({ inBranch }) => {
    let LocalFromLowDb = TodayOrdersWithQrs({ inBranch });

    return LocalFromLowDb;
};

export { GetWithQrCodesFunc };