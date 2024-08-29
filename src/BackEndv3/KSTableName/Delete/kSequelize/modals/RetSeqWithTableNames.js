import { DataTypes } from "sequelize";
import Configjson from '../../../Config.json' assert { type: 'json' };
import tableNameJson from '../../tableName.json' assert { type: 'json' };

import { StartFunc as StartFuncInitializeSequelize } from "../../../kSequelize/initializeSequelize.js";

let StartFunc = async () => {
    let LocalTableName = tableNameJson.tableName;
    let LocaltableAndColumns = Configjson.sequelizeConfig.tableAndColumns;

    const sequelize = await StartFuncInitializeSequelize();

    let LocalColumnsNeeded = LocaltableAndColumns.find(element => element.tableName === LocalTableName);

    Object.entries(LocalColumnsNeeded.tableColumns).forEach(
        ([key, value]) => {
            if (value.type === "STRING") {
                value.type = DataTypes.STRING;
            };

            if (value.type === "NUMBER") {
                value.type = DataTypes.NUMBER;
            };
        }
    );

    sequelize.define(LocalTableName, LocalColumnsNeeded.tableColumns, { freezeTableName: true });

    return await sequelize;
};

export { StartFunc };

