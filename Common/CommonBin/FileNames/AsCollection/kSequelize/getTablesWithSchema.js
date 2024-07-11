import { StartFunc as initializeSequelize } from '../../../../../bin/kSequelize/initializeSequelize.js';

let StartFunc = async () => {
    const sequelize = await initializeSequelize();
    let LocalTablesAsObject = {};

    let LocalTableNames = await sequelize.getQueryInterface().showAllSchemas();

    for (const [key, value] of Object.entries(LocalTableNames)) {
        LocalTablesAsObject[value.name] = {};

        let LocalColumnsInfo = await sequelize.getQueryInterface().describeTable(value.name);

        LocalTablesAsObject[value.name] = LocalColumnsInfo;
    };

    return await LocalTablesAsObject;
};

export { StartFunc };