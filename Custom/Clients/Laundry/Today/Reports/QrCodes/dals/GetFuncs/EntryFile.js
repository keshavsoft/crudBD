import { StartFunc as ToadyQrAllReports } from '../../kLowDb/ReadFileList/ToadyQrAllReports.js';
import { StartFunc as InBranch } from '../../kLowDb/ReadFromFile/InBranch.js';
import { StartFunc as toFactory } from '../../kLowDb/ReadFromFile/toFactory.js';

let GetAllFuncs = ({ inBranch }) => {
    return ToadyQrAllReports({ inBranch });
};

let GetInBranchFuncs = ({ inBranch }) => {
    return InBranch({ inBranch });
};

let GetToFactoryFuncs = ({ inBranch }) => {
    return toFactory({ inBranch });
};

let GetFactoryScanFuncs = ({ inBranch }) => {
    return toFactory({ inBranch });
};

let GetFactoryReturnFuncs = ({ inBranch }) => {
    return toFactory({ inBranch });
};

export {
    GetAllFuncs, GetInBranchFuncs, GetToFactoryFuncs, GetFactoryScanFuncs, GetFactoryReturnFuncs
};