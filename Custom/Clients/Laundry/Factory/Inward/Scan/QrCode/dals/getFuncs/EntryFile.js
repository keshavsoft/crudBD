import { StartFunc as All } from '../../kLowDb/ReadFileList/All.js';
import HomeJson from './home.json' with {type: 'json'};

let GetFunc = ({ inFactory }) => {
    let LocalFromLowDb = All({ inFactory });

    return LocalFromLowDb;
};
let GetPendingFunc = ({ inFactory }) => {
    let LocalFromLowDb = All({ inFactory });

    return LocalFromLowDb;
};
let GetScannedFunc = ({ inFactory }) => {
    let LocalFromLowDb = All({ inFactory });

    return LocalFromLowDb;
};
export {
    GetFunc, GetPendingFunc, GetScannedFunc
};