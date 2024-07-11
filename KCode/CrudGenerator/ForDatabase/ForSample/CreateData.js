import { StartFunc as StartFuncSequilizeData } from "./SequilizeData.js";
import { StartFunc as StartFuncEntryFile } from "./ForFlatJson/EntryFile.js";
import Config from '../../../Config.json' assert {type: 'json'};

let StartFunc = async () => {
    if (Config.isSequelize) {
        await StartFuncSequilizeData();
        return;
    };

    StartFuncEntryFile();
};

// export { StartFunc }
StartFunc().then();