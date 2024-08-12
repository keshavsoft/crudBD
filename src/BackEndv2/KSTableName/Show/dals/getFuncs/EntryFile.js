import { StartFunc as ReadFromFile } from '../../kLowDb/ReadFromFile/getFunc.js';

let GetFunc = () => {
    return ReadFromFile();
};

let GetDataOnlyFunc = () => {
    let LocalFromLowDb = ReadFromFile();

    if (LocalFromLowDb === false) {
        return false;
    };

    return LocalFromLowDb;
};
let GetImagesFunc = () => {
    let LocalFromLowDb = ReadFromFile();

    if (LocalFromLowDb === false) {
        return false;
    };

    return LocalFromLowDb;
};


export {
    GetFunc, GetDataOnlyFunc, GetImagesFunc
};