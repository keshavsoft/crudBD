import { StartFunc as StartFuncFilesOnly } from "./SecondLevel/FilesOnly.js";

let StartFunc = ({ inTablesCollection, inDataPk }) => {
    StartFuncFilesOnly({ inTablesCollection, inDataPk })
};

export { StartFunc };
