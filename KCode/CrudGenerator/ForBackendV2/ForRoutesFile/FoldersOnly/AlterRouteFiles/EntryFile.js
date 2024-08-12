import fs from 'fs';

import { StartFunc as StartFuncForImports } from './ForImports.js';
import { StartFunc as StartFuncForRouterUse } from './ForRouterUse.js';

let StartFunc = ({ inTablesCollection, inTo }) => {
    let LocalFileName = "routes.js";
    // let LocalFrom = inFrom;
    let LocalTo = inTo;

    let LocalTablesCollection = inTablesCollection;

    let LocalFirstLevelFolders = LocalTablesCollection.children.filter(element => {
        return "children" in element
    });

    let LocalFileData = fs.readFileSync(`${LocalTo}/${LocalFileName}`);
    let LocalFromForImports;
    let LocalFromForRouterUse;

    LocalFromForImports = StartFuncForImports({
        inTablesCollection: LocalFirstLevelFolders,
        inFileData: LocalFileData.toString()
    });

    LocalFromForRouterUse = StartFuncForRouterUse({
        inTablesCollection: LocalFirstLevelFolders,
        inFileData: LocalFromForImports
    });

    fs.writeFileSync(`${LocalTo}/${LocalFileName}`, LocalFromForRouterUse);
};

export { StartFunc };