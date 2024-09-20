// import HomeJson from './home.json' with {type: 'json'};
import { StartFunc as GetRowDataById } from '../../kLowDb/ReadFileList/GetRowDataById.js';
import { StartFunc as GetRowQrDataById } from '../../kLowDb/ReadFileList/GetRowQrDataById.js';


let GetRowDataFunc = ({ inFactory, inId }) => {
    let LocalFromLowDb = GetRowDataById({ inFactory, inId });

    return LocalFromLowDb;
};

let GetRowQrDataFunc = ({ inId }) => {
    let LocalFromLowDb = GetRowQrDataById({ inId });

    return LocalFromLowDb;
};
export {
    GetRowDataFunc, GetRowQrDataFunc
};