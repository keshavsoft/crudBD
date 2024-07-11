import ConfigJson from '../../../../../../bin/Config.json' with {type: 'json'};
import sideBarSingleTable from '../../../../../../KCode/ForFrontEndSingleTable/CRUD/sideBarShow.json' with {type: 'json'};

import { StartFunc as mainTableSchema } from "../../../mainTableSchema.js";
import { StartFunc as mainTableColumnsConfig } from "../../../mainTableColumnsConfig.js";
import { StartFunc as foreignTableColumnsConfig } from "../../../foreignTableColumnsConfig.js";

import path from "path";
import _ from "lodash";

const StartFunc = ({ mode, inFilesArray, inTableName }) => {
    const variables = {};
    let LocalFiles = inFilesArray;
    let sidebarItems = showTableNameInSideBar({ inTableName });

    Object.keys(LocalFiles).forEach((filename) => {
        if (filename.includes('layouts/FrontEnd')) filename = `layouts/FrontEnd/${filename}`

        let LoopInsideTableName = inTableName;
        let LoopInsidecolumnData = mainTableColumnsConfig({ inTableName: LoopInsideTableName });
        let LoopInsideTableConfig = mainTableSchema({ inTableName: filename });
        let LocalInsideForeignTable = foreignTableColumnsConfig({ inTableName: LoopInsideTableName });
        let LocalInsideSubTableName = "";

        if (LocalInsideForeignTable === undefined === false) {
            LocalInsideSubTableName = path.parse(LocalInsideForeignTable?.name)?.name;
        };

        variables[filename + '.html'] = {
            web_title: "Mazer Admin Dashboard",
            filename: filename + '.html',
            sidebarItems,
            isDev: mode === 'development',
            DataPk: ConfigJson.jsonConfig.DataPk,
            tableName: LoopInsideTableName,
            subTableName: LocalInsideSubTableName,
            columnData: LoopInsidecolumnData,
            tableConfig: LoopInsideTableConfig,
            foreignTablecolumnData: LocalInsideForeignTable?.fileData
        };
    });

    return variables;
};

const showTableNameInSideBar = ({ inTableName }) => {
    let sidebarItems = sideBarSingleTable;
    // sidebarItems[0].name = inTableName;

    return sidebarItems;
};

export { StartFunc };