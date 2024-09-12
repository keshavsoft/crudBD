import { StartFunc as ReadFromFile } from '../../kLowDb/ReadFromFile/getFunc.js';
import { StartFunc as getRowFunc } from '../../kLowDb/ReadFromFile/getRowFunc.js';

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

export {
    GetFunc, GetDataOnlyFunc, GetImagesFunc, GetBodyCheckFunc, GetFromModalFunc,
    GetFromModalUuidFunc, GetWithJoinsFunc, GetDataSortByColumnFunc, GetRowDataFunc,
    GetMaxRowFunc, GetLastRowFunc, GetFilterFunc
};