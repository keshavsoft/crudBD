import { StartFunc as SingleImage } from '../../kLowDb/ReadFromFile/SingleImage.js';
import { StartFunc as anyExt } from '../../kLowDb/ReadFromFile/anyExt.js';

let GetFunc = () => {
    // let LocalFromLowDb = ReadFromFile();

    return false;
};

let GetRowDataFunc = ({ inId, inResponse }) => {
    SingleImage({ inKey: inId, inResponse });
};

let GetAnyExtFunc = ({ inId }) => {
    anyExt({ inKey: inId });
};

export {
    GetFunc, GetRowDataFunc, GetAnyExtFunc
};