import { StartFunc as ToadyOrdersReports } from '../../kLowDb/ReadFileList/ToadyOrdersReports.js';

let GetFuncs = ({ inBranch }) => {
    return ToadyOrdersReports({ inBranch });
};

export {
    GetFuncs
};