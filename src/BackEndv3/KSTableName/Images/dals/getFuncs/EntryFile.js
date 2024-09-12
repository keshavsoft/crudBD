import { StartFunc as ReadFromFile } from '../../kLowDb/ReadFromFile/getFunc.js';
import { StartFunc as SingleImage } from '../../kLowDb/ReadFromFile/SingleImage.js';

let GetFunc = () => {
    let LocalFromLowDb = ReadFromFile();

    return LocalFromLowDb;
};

let GetRowDataFunc = ({ inId }) => {
    let LocalFromLowDb = SingleImage({ inKey: inId });

    if (LocalFromLowDb.KTF === false) {
        return LocalFromLowDb;
    };

    return LocalFromLowDb.JsonData;
};

export {
    GetFunc, GetRowDataFunc
};