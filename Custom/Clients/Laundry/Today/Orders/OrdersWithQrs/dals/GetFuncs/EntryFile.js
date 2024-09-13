import { StartFunc as TodayOrdersWithQrs } from '../../kLowDb/ReadFileList/TodayOrdersWithQrs.js';

let GetFuncs = ({ inBranch }) => {
    console.log("pushpa");
    
    return TodayOrdersWithQrs({ inBranch });
};

export {
    GetFuncs
};