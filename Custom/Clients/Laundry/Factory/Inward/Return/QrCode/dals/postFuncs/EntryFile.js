import { StartFunc as FacoryEntryScan } from '../../kLowDb/WriteToFile/FacoryEntryScan/entryFile.js';

let PostFunc = ({ inFactory, inDataInsert }) => {
    let LocalFromLowDb = FacoryEntryScan({ inFactory, inDataInsert });

    return LocalFromLowDb;
};

export {
    PostFunc
};