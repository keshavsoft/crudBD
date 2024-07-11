// import { StartFunc as StartFuncPrepareTablesSchema } from "./PrepareTablesSchema/EntryFile.js";
import { StartFunc as StartFuncPrepareReadColumnsData } from "./PrepareTablesSchema/ReadColumnsData.js";

import { StartFunc as StartFuncForDatabase } from './ForDatabase/EntryFile.js';
import { StartFunc as StartFuncForBackend } from './ForBackend/EntryFile.js';

let StartFunc = ({ inFilesArray }) => {
    let LocalFilesArray = inFilesArray;

    StartFuncPrepareReadColumnsData({ inTableData: LocalFilesArray });

    let CommonFrom = "src";
    let CommonTo = "bin";

    StartFuncForBackend({
        inTablesCollection: LocalFilesArray,
        inFrom: CommonFrom,
        inTo: CommonTo
    });

    StartFuncForDatabase({
        inFilesArray: LocalFilesArray,
        inFrom: CommonFrom
    });
};

export { StartFunc };
