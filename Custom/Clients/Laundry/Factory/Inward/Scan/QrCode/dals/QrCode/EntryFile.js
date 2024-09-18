import { StartFunc as EntryScan } from '../../kLowDb/EntryScan/Scan.js';

let QrCodeFunc = ({ inFactory, inPostBody }) => {
    return EntryScan({ inFactory, inDataInsert: inPostBody });
};

export { QrCodeFunc };