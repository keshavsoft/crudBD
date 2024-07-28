import { StartFunc as StartFuncPrepareReadColumnsData } from "./PrepareTablesSchema/ReadColumnsData.js";
import { StartFunc as StartFuncForBackend } from './ForBackend/EntryFile.js';
import { StartFunc as ForBackendSecured } from './ForBackendSecured/EntryFile.js';

let StartFunc = ({ inFilesArray }) => {
    let LocalFilesArray = inFilesArray;

    StartFuncPrepareReadColumnsData({ inTableData: LocalFilesArray });

    // let CommonFrom = "src/BackEnd";
    // let CommonTo = "bin";

    // StartFuncForBackend({
    //     inTablesCollection: LocalFilesArray,
    //     inFrom: CommonFrom,
    //     inTo: CommonTo
    // });

    LocalFuncForBackEnd({ inFilesArray: LocalFilesArray });
    LocalFuncForBackEndSecured({ inFilesArray: LocalFilesArray });
};

let LocalFuncForBackEndSecured = ({ inFilesArray }) => {
    let LocalFilesArray = inFilesArray;
    let CommonFrom = "src/BackEnd";
    let CommonTo = "binSecured";

    ForBackendSecured({
        inTablesCollection: LocalFilesArray,
        inFrom: CommonFrom,
        inTo: CommonTo
    });
    
    console.log(`Generated the endpoints in backend : ${CommonTo}`);
};

let LocalFuncForBackEnd = ({ inFilesArray }) => {
    let LocalFilesArray = inFilesArray;
    let CommonFrom = "src/BackEnd";
    let CommonTo = "bin";

    StartFuncForBackend({
        inTablesCollection: LocalFilesArray,
        inFrom: CommonFrom,
        inTo: CommonTo
    });
    
    console.log(`Generated the endpoints in backend : ${CommonTo}`);
};

export { StartFunc };
