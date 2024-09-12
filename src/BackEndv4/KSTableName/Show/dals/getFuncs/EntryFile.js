import { StartFunc as ReadFromFile } from '../../kLowDb/ReadFromFile/getFunc.js';
import { StartFunc as getBodyCheck } from '../../kLowDb/ReadFromFile/getBodyCheck.js';
import { StartFunc as getimagesOnly } from '../../kLowDb/ReadFromFile/getimagesOnly.js';
import { StartFunc as withJoins } from '../../kLowDb/ReadFromFile/withJoins.js';
import { StartFunc as getRowFunc } from '../../kLowDb/ReadFromFile/getRowFunc.js';
import { StartFunc as lastRow } from '../../kLowDb/ReadFromFile/WithJoins/lastRow.js';

let GetFunc = () => {
    let LocalFromLowDb = ReadFromFile();

    return LocalFromLowDb;
};

let GetRowDataFunc = ({ inId }) => {
    let LocalFromLowDb = getRowFunc({ inId });

    if (LocalFromLowDb.KTF === false) {
        return LocalFromLowDb;
    };

    return LocalFromLowDb.JsonData;
};

let GetDataOnlyFunc = () => {
    let LocalFromLowDb = ReadFromFile();

    return LocalFromLowDb;
};

let GetDataSortByColumnFunc = () => {
    let LocalFromLowDb = ReadFromFile();

    if (LocalFromLowDb.KTF === false) {
        return false;
    };

    return LocalFromLowDb.JsonData;
};

let GetImagesFunc = () => {
    let LocalFromLowDb = getimagesOnly();

    if (LocalFromLowDb.KTF === false) {
        return false;
    };

    return LocalFromLowDb.JsonData;
};

let GetBodyCheckFunc = () => {
    let LocalFromLowDb = getBodyCheck();

    if (LocalFromLowDb.KTF === false) {
        return false;
    };

    return LocalFromLowDb;
};

let GetFromModalFunc = () => {
    let LocalFromLowDb = ReadFromFile();

    if (LocalFromLowDb.KTF === false) {
        return false;
    };

    return LocalFromLowDb.JsonData;
};

let GetFromModalUuidFunc = () => {
    let LocalFromLowDb = ReadFromFile();

    if (LocalFromLowDb.KTF === false) {
        return false;
    };

    return LocalFromLowDb.JsonData;
};

let GetWithJoinsFunc = () => {
    let LocalFromLowDb = withJoins();

    if (LocalFromLowDb.KTF === false) {
        return false;
    };

    return LocalFromLowDb.JsonData;
};

let GetMaxRowFunc = () => {
    let LocalFromLowDb = lastRow();

    if (LocalFromLowDb.KTF === false) {
        return false;
    };

    return LocalFromLowDb.JsonData;
};
let GetLastRowFunc = () => {
    let LocalFromLowDb = lastRow();

    if (LocalFromLowDb.KTF === false) {
        return false;
    };

    return LocalFromLowDb.JsonData;
};

let GetFilterFunc = ({ inFilterKey, inFilterValue }) => {
    let LocalFromLowDb = lastRow({ inFilterKey, inFilterValue });

    if (LocalFromLowDb.KTF === false) {
        return false;
    };

    return LocalFromLowDb.JsonData;
};
export {
    GetFunc, GetDataOnlyFunc, GetImagesFunc, GetBodyCheckFunc, GetFromModalFunc,
    GetFromModalUuidFunc, GetWithJoinsFunc, GetDataSortByColumnFunc, GetRowDataFunc,
    GetMaxRowFunc, GetLastRowFunc, GetFilterFunc
};