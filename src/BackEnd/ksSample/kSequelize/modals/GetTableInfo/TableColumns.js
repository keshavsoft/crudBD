// import { StartFunc as StartFuncInitializeSequelize } from '../../../../kSequelize/initializeSequelize.js';

import { StartFunc as StartFuncInitializeSequelize } from '../../../../kSequelize/AssignSchema.js';

import tableNameJson from '../../../tableName.json' assert { type: 'json' };
import path from "path";

let AllColumns = async () => {
    let LocalTableName = path.parse(tableNameJson.tableName).name;
    console.log("LocalTableName : ", LocalTableName);
    const sequelize = await StartFuncInitializeSequelize();

    let LocalColumnsInfo = await sequelize.getQueryInterface().describeTable(LocalTableName);

    Object.entries(LocalColumnsInfo).forEach(
        ([key, value]) => {
            if (value.type === "STRING" || value.type === "DATETIME") {
                LocalColumnsInfo[key] = "";
            };

            // if (value.type === "INTEGER") {
            //     LocalColumnsInfo[key] = 0;
            // };

        }
    );
    console.log("kkkkkkkkkkk : ", LocalColumnsInfo);
    return await LocalColumnsInfo;
};

let ColumnsForAlter = async () => {
    let LocalTableName = tableNameJson.tableName;

    const sequelize = await StartFuncInitializeSequelize();

    let LocalColumnsInfo = await sequelize.getQueryInterface().describeTable(LocalTableName);

    delete LocalColumnsInfo.id;
    delete LocalColumnsInfo.createdAt;
    delete LocalColumnsInfo.updatedAt;

    return await LocalColumnsInfo;
};

export { AllColumns, ColumnsForAlter };