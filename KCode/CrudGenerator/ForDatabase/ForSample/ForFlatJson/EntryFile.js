import { StartFunc as StartFuncSecondLevelEntryFile } from "./SecondLevelEntryFile.js";

let StartFunc = () => {
    StartFuncSecondLevelEntryFile();
};

export { StartFunc };
