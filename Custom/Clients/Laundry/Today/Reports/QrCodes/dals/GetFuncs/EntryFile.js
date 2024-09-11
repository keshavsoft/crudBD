import { StartFunc as ToadyQrAllReports } from '../../kLowDb/ReadFileList/ToadyQrAllReports.js';

let GetAllFuncs = ({ inBranch }) => {
    return ToadyQrAllReports({ inBranch });
};

let GetInBranchFuncs = ({ inBranch }) => {
    return ToadyOrdersReports({ inBranch });
};

let GetToFactoryFuncs = ({ inBranch }) => {
    return ToadyOrdersReports({ inBranch });
};

export {
    GetAllFuncs, GetInBranchFuncs, GetToFactoryFuncs
};