import { StartFunc as StartFuncFilesOnly } from "./SecondLevel/FilesOnly.js";

let StartFunc = ({ inTablesCollection }) => {
    StartFuncFilesOnly({ inTablesCollection })
};

export { StartFunc };
