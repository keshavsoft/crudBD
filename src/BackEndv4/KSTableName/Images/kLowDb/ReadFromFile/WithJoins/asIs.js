import { StartFunc as StartFuncPullData } from "../PullData/EntryFile.js";
import { StartFunc as getForeignTables } from "./getForeignTables.js";
import { StartFunc as primaryTablesWithData } from "./primaryTablesWithData.js";

let StartFunc = async () => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    let LocalStartFuncPullData = StartFuncPullData();

    if (LocalStartFuncPullData === false) {
        LocalReturnData.KReason = LocalStartFuncPullData.KReason;
        return LocalReturnData;
    };

    const db = LocalStartFuncPullData.inDb;
    db.read();
    let LocalDataNeeded = db.data;

    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = LocalFuncDataFromPrimary({ inData: LocalDataNeeded });

    return await LocalReturnData;
};

const LocalFuncDataFromPrimary = ({ inData }) => {
    const LocalPrimaryData = primaryTablesWithData().JsonData;
    const LocalForeignTable = getForeignTables();

    let LocalNewData = inData.map(LoopData => {
        let LoopNewRow;

        for (const [key, value] of Object.entries(LocalForeignTable)) {
            let LoopInsideFind = LocalPrimaryData[value.references.model].find(element => {
                return element[value.references.key] = LoopData[key];
            });

            LoopNewRow = { ...LoopData, ...LoopInsideFind };
        };

        return LoopNewRow;
    });

    return LocalNewData;
};

export { StartFunc };
