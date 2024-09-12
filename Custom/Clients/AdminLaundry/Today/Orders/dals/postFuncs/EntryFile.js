import { StartFunc as EntryScan } from '../../kLowDb/EntryScan/Scan.js';

let PostFunc = ({ inBranch, inPostBody }) => {
    return EntryScan({ inBranch, inDataInsert: inPostBody });
};

export { PostFunc };