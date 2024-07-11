import { StartFunc as StartFuncSecondLevelEntryFile } from "./SecondLevelEntryFile.js";

let StartFunc = ({ inTablesCollection }) => {
    let LocalTablesCollection = inTablesCollection;

    if ("children" in LocalTablesCollection === false) {
        return;
    };

    StartFuncSecondLevelEntryFile({ inTablesCollection: LocalTablesCollection });
};

export { StartFunc };
