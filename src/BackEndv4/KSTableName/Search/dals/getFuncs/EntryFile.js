import { StartFunc as ApplyFilter } from '../../kLowDb/ReadFromFile/ApplyFilter/getFunc.js';
import { StartFunc as AsObject } from "../../kLowDb/ReadFromFile/ApplyFilter/AsObject.js";
import { StartFunc as AsArray } from '../../kLowDb/ReadFromFile/ApplyFilter/AsArray.js';

let GetFunc = ({ inFilterObject }) => {
    let LocalFromLowDb = ApplyFilter({ inFilterObject });

    return LocalFromLowDb;
};

let GetAsObjectFunc = ({ inFilterObject }) => {
    let LocalFromLowDb = AsObject({ inFilterObject });

    return LocalFromLowDb;
};

let GetAsArrayFunc = ({ inKey, inValue }) => {
    let LocalFromLowDb = AsArray({ inKey, inValue });

    return LocalFromLowDb;
};

export {
    GetFunc, GetAsObjectFunc, GetAsArrayFunc
};