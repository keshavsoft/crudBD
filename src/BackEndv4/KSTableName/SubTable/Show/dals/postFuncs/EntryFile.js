// import { StartFunc as ApplyFilter } from '../../kLowDb/ReadFromFile/ApplyFilter/getFunc.js';

let postFilterDataFromBodyFunc = ({ inFindKey, inFindValue }) => {
    // let LocalFromLowDb = ApplyFilter({ inFindKey, inFindValue });

    // if (LocalFromLowDb.KTF === false) {
    //     return false;
    // };

    // return LocalFromLowDb;

    return true;
};

export {
    postFilterDataFromBodyFunc
};