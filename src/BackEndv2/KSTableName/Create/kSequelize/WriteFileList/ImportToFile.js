import { StartFunc as StartFuncInitializeSequelizeWithTableName } from '../modals/initializeSequelizeWithTableName.js';

import { StartFunc as StartFuncInitializeSequelize } from '../../../kSequelize/initializeSequelize.js';
import tableNameJson from '../../tableName.json' assert { type: 'json' };
import path from "path";

let StartFunc = async (inPostBody) => {
    let LocalTableName = path.parse(tableNameJson.tableName).name

    const LocalTableData = await StartFuncInitializeSequelizeWithTableName();

    if ("KTF" in LocalTableData) {
        if (LocalTableData.KTF === false) {
            return await LocalTableData;
        };
    };

    try {
        const sequelize = await StartFuncInitializeSequelize();

        let LocalColumnsInfo = await sequelize.getQueryInterface().describeTable(LocalTableName);

        let LocalUniqueColumn = getKeyByValue(LocalColumnsInfo);

        let LocalUniqueColumnArray = inPostBody.map(element => {
            return element[LocalUniqueColumn];
        });

        let LocalWhereObject = {};
        LocalWhereObject[LocalUniqueColumn] = LocalUniqueColumnArray;

        const LocalFoundRows = await LocalTableData.findAll({
            where: LocalWhereObject
        });

        if (LocalFoundRows.length > 0) {
            const LocalFoundRowsWithData = LocalFoundRows.map(function (result) {
                return result.dataValues;
            });

            return await {
                KTF: false, KReason: {
                    ErrorFrom: process.cwd(),
                    ConflictData: LocalFoundRowsWithData
                }
            };
        };

        const LocalFromBuild = await LocalTableData.bulkCreate(inPostBody);

        return await LocalFromBuild;
    } catch (error) {
        return await { KTF: false, KReason: error, ErrorFrom: process.cwd() };
    };
};

function getKeyByValue(object) {
    return Object.keys(object).find(key => object[key].unique);
};

export { StartFunc };

