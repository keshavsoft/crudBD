import { StartFunc as EntryScan } from '../../kLowDb/EntryScan/Scan.js';

let PostFunc = ({ inFactory, inPostBody }) => {
    return EntryScan({ inFactory, inDataInsert: inPostBody });
};

export { PostFunc };