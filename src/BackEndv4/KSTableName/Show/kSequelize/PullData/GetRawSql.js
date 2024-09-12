import { StartFunc as initializeSequelize } from '../../../kSequelize/initializeSequelize.js';

import fs from "fs";

let StartFunc = async ({ inId }) => {
    try {
        const sequelize = await initializeSequelize();

        let LocalSqlPath = fs.readFileSync("KData/JSON/324/sqlNeeded/sqlite/fp/transactions/head/WithInvGroup.sql", "utf8");
        let Localreplaced = LocalSqlPath.replaceAll("\r\n", " ");
        
        const [results, metadata] = await sequelize.query(Localreplaced);
        const LocalReturnData = {};

        LocalReturnData.KTF = true;
        LocalReturnData.JsonData = results;

        return await LocalReturnData;
    } catch (error) {
        return await {
            KTF: false,
            KReason: { ErrorFrom: process.cwd(), sequelizeError: error },
        };
    };
};

export { StartFunc };