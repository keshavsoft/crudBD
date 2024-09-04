import { StartFunc as TodayOrdersWithQrs } from '../../kLowDb/ReadFileList/TodayOrdersWithQrs.js';
import { StartFunc as ToadyOrdersReports } from '../../kLowDb/ReadFileList/ToadyOrdersReports.js';

let GetWithQrCodesFunc = ({ inBranch }) => {
    let LocalFromLowDb = TodayOrdersWithQrs({ inBranch });

    return LocalFromLowDb;
};

let GetReportFunc = ({ inBranch }) => {
    let LocalFromLowDb = ToadyOrdersReports({ inBranch });

    return LocalFromLowDb;
};

export { GetWithQrCodesFunc, GetReportFunc };