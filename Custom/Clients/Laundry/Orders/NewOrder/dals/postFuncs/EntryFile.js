import { StartFunc as EntryScan } from '../../kLowDb/EntryScan/WithChecking/StartFunc.js';

let PostFunc = ({ inBranch, inPostBody }) => {
    return EntryScan({ inBranch, inDataToInsert: inPostBody });
};

export { PostFunc };