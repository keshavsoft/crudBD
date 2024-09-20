import { StartFunc as SingleImage } from '../../kLowDb/ReadFromFile/SingleImage.js';
import { StartFunc as anyExt } from '../../kLowDb/ReadFromFile/anyExt.js';

let GetFunc = () => {
    // let LocalFromLowDb = ReadFromFile();

    return false;
};

let GetRowDataFunc = ({ inId, inResponse }) => {
    SingleImage({ inKey: inId, inResponse });
};

let GetAnyExtFunc = ({ inId, inResponse }) => {
    anyExt({ inKey: inId, inResponse });
};

export {
    GetFunc, GetRowDataFunc, GetAnyExtFunc
};