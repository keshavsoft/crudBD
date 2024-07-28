import { StartFunc as StartFuncFoldersOnly } from "./FirstLevel/FoldersOnly.js";

let StartFunc = ({ inTablesCollection, inDataPk }) => {
    StartFuncFoldersOnly({ inTablesCollection, inDataPk });
};

export { StartFunc };
