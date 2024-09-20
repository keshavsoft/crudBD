import { StartFunc as All } from '../../kLowDb/ReadFileList/All.js';
import { StartFunc as Pending } from '../../kLowDb/ReadFileList/Pending.js';
import { StartFunc as Scanned } from '../../kLowDb/ReadFileList/Scanned.js';
import { StartFunc as Returns } from '../../kLowDb/ReadFileList/Returns.js';

// import HomeJson from './home.json' with {type: 'json'};

let GetFunc = ({ inFactory }) => {
    let LocalFromLowDb = All({ inFactory });

    return LocalFromLowDb;
};

let GetPendingFunc = ({ inFactory }) => {
    let LocalFromLowDb = Pending({ inFactory });

    return LocalFromLowDb;
};

let GetScannedFunc = ({ inFactory }) => {
    let LocalFromLowDb = Scanned({ inFactory });

    return LocalFromLowDb;
};

let GetReturnsFunc = ({ inFactory }) => {
    let LocalFromLowDb = Returns({ inFactory });

    return LocalFromLowDb;
};

let GetRowDataFunc = ({ inFactory, inId }) => {
    let LocalFromLowDb = Scanned({ inFactory, inId });

    return LocalFromLowDb;
};

export {
    GetFunc, GetPendingFunc, GetScannedFunc, GetRowDataFunc, GetReturnsFunc
};