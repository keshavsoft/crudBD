import { StartFunc as buildData } from '../CommonFuncs/buildData.js';

let StartFunc = ({ inBranch }) => {
    let LocalBranchName = inBranch;

    let jVarLocalTransformedData = buildData({ inBranch: LocalBranchName });

    let jVarLocalUnScanned = jVarLocalTransformedData.filter(element => {
        return element.Status === true;
    });

    let LocalArrayReverseData = jVarLocalUnScanned.slice().reverse();

    return LocalArrayReverseData;
};

export { StartFunc };
