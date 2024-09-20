import { StartFunc as ToadyQrAllReports } from '../../kLowDb/ReadFileList/ToadyQrAllReports.js';
import { StartFunc as InBranch } from '../../kLowDb/ReadFromFile/InBranch.js';

let GetAllFuncs = ({ inBranch }) => {
    return ToadyQrAllReports({ inBranch });
};

let GetInBranchFuncs = ({ inBranch }) => {
    return InBranch({ inBranch });
};

let GetToFactoryFuncs = ({ inBranch }) => {
    return ToadyOrdersReports({ inBranch });
};

export {
    GetAllFuncs, GetInBranchFuncs, GetToFactoryFuncs
};