import { StartFunc as StartFuncAlterRouteFiles } from './FoldersOnly/AlterRouteFiles/EntryFile.js';
import { StartFunc as StartFuncCopyFolders } from './FoldersOnly/InsideFiles/CopyFolders.js';

let StartFunc = ({ inTablesCollection, inFrom, inTo }) => {
    StartFuncAlterRouteFiles({ inTablesCollection, inFrom, inTo });
    StartFuncCopyFolders({ inTablesCollection, inFrom, inTo });
};

export { StartFunc };
