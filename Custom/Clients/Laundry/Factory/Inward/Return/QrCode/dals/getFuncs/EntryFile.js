// import HomeJson from './home.json' with {type: 'json'};
import { StartFunc as GetRowDataById } from '../../kLowDb/ReadFileList/GetRowDataById.js';


let GetRowDataFunc = ({ inFactory, inId }) => {
    let LocalFromLowDb = GetRowDataById({ inFactory, inId });

    return LocalFromLowDb;
};
export {
    GetRowDataFunc
};