import { StartFunc as dataWithColumns } from '../../kLowDb/ReadFromFile/dataWithColumns.js';

let GetFunc = () => {
    let LocalFromLowDb = dataWithColumns();

    return LocalFromLowDb;
};

export {
    GetFunc
};