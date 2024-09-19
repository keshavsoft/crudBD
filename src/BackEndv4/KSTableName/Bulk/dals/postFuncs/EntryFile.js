import { StartFunc as StartFuncWriteTofile } from '../../kLowDb/WriteTofile/WithChecking/StartFunc.js';
import { StartFunc as BulkInsert } from '../../kLowDb/WriteTofile/BulkInsert/EntryFile.js';

let PostFunc = (inPostBody) => {
    return StartFuncWriteTofile({ inDataToInsert: inPostBody });
};

let MultiInsertWithCheckFunc = ({ inArrayToInsert }) => {
    return BulkInsert({ inArrayFromRequest: inArrayToInsert });
};

export {
    PostFunc, MultiInsertWithCheckFunc
};