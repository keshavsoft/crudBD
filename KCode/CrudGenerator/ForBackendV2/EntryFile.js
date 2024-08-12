import { StartFunc as StartFuncForRoutesFile } from './ForRoutesFile/EntryFile.js';
import { StartFunc as StartFuncForConfigJson } from './ForConfigJson/EntryFile.js';
import { StartFunc as StartFuncForRestClients } from './ForRestClients/EntryFile.js';
import { StartFunc as StartFuncForTableName } from './ForTableName/EntryFile.js';
import { StartFunc as StartFuncForkSequelize } from './ForkSequelize/EntryFile.js';

import fs from "fs-extra";

let StartFunc = async ({ inTablesCollection, inFrom, inTo }) => {
    let LocalTablesCollection = inTablesCollection;

    if ("children" in LocalTablesCollection === false) {
        return;
    };

    LocalFuncCreateFolders({ inTo });

    StartFuncForRoutesFile({ inTablesCollection, inFrom, inTo });
    await StartFuncForConfigJson({ inTablesCollection, inFrom, inTo })
    StartFuncForRestClients({ inTablesCollection, inFrom, inTo });
    StartFuncForTableName({ inTablesCollection, inTo });
    StartFuncForkSequelize({ inFrom, inTo });
};

let LocalFuncCreateFolders = ({ inTo }) => {
    let LocalTo = inTo;

    if (fs.existsSync(LocalTo) === false) {
        fs.mkdirSync(LocalTo);
    };
};

export { StartFunc };