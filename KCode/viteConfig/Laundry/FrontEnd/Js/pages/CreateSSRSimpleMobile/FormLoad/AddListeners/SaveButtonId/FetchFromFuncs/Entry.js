import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";
import { StartFunc as CheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalFromCheck = CheckFunc();
    
    if (jVarLocalFromCheck) {
        let jVarLocalDataNeeded = await StartFuncFetchFuncs();

        if (jVarLocalDataNeeded !== null) {
            if (jVarLocalDataNeeded) {
                StartFuncAfterFetch();
            };
        };
    };
};

export { StartFunc }