import { StartFunc as EntryScan } from '../../kLowDb/EntryScan/Scan.js';

let GetFunc = ({ inFactory }) => {
    console.log("infactory");
    return EntryScan({ inFactory });

};

export { GetFunc };