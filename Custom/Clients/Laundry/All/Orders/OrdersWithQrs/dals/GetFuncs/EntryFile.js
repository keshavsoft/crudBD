import { StartFunc as TodayOrdersWithQrs } from '../../kLowDb/ReadFileList/TodayOrdersWithQrs.js';

let GetFuncs = ({ inBranch }) => {
    return TodayOrdersWithQrs({ inBranch });
};

export {
    GetFuncs
};