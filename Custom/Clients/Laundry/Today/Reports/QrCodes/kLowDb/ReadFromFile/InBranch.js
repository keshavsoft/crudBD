import { StartFunc as buildData } from '../CommonFuncs/buildData.js';

let StartFunc = ({ inBranch }) => {
    let LocalBranchName = inBranch;

    let jVarLocalTransformedData = buildData({ inBranch: LocalBranchName });
    let LocalArrayReverseData = jVarLocalTransformedData.slice().reverse();

    return LocalArrayReverseData;
};

export { StartFunc };
