import { StartFunc as ReadFromFile } from '../../kLowDb/ReadFromFile/getFunc.js';
import { StartFunc as SingleImage } from '../../kLowDb/ReadFromFile/SingleImage.js';

let GetFunc = () => {
    let LocalFromLowDb = ReadFromFile();

    return LocalFromLowDb;
};

let GetRowDataFunc = ({ inId, inResponse }) => {
    SingleImage({ inKey: inId, inResponse });
};

export {
    GetFunc, GetRowDataFunc
};