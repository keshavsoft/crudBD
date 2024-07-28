import { StartFunc as StartFuncFirstLevelEntryFile } from "./FirstLevelEntryFile.js";
import { StartFunc as StartFuncSecondLevelEntryFile } from "./SecondLevelEntryFile.js";

let StartFunc = ({ inTablesCollection, inDataPk }) => {
    let LocalTablesCollection = inTablesCollection;
    let LocalDataPk = inDataPk;

    if ("children" in LocalTablesCollection === false) {
        return;
    };

    StartFuncFirstLevelEntryFile({ inTablesCollection: LocalTablesCollection, inDataPk: LocalDataPk });
    StartFuncSecondLevelEntryFile({ inTablesCollection: LocalTablesCollection, inDataPk: LocalDataPk });
};

export { StartFunc };
