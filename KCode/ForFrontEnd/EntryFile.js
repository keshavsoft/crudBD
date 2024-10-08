import path from 'path'
import { fileURLToPath } from 'url';

import { StartFunc as ReadDataSchema } from "../ReadDataSchema.js";
import { StartFunc as GetTemplateHtmlFiles } from "./viteFuncs/getHtmlFiles.js";
import { StartFunc as BuildSideBarJson } from "./viteFuncs/BuildSideBarJson.js";

import { StartFunc as StartFuncCopyHtmlFiles } from "./PrepareHtmlFiles/CopyHtmlFiles.js";
import { StartFunc as StartFuncCopySchema } from "./CopySchema.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const StartFunc = () => {
    const LocalTableNames = ReadDataSchema();
    
    const files = GetTemplateHtmlFiles({ inRootFolder: __dirname });

    let sidebarItems = BuildSideBarJson({ inFilesArray: files, inTablesArray: LocalTableNames.children });

    StartFuncCopyHtmlFiles({ inSideBarArray: sidebarItems });
    StartFuncCopySchema();

    return sidebarItems;
};

export { StartFunc };