import { StartFunc as initializeSequelize } from '../../../../../bin/kSequelize/initializeSequelize.js';

let StartFunc = async () => {
    const sequelize = await initializeSequelize();

    let LocalTableNames = await sequelize.getQueryInterface().showAllSchemas();

    console.log("kkkkkkkkkkk : ", LocalTableNames);
    return await LocalTableNames;
};

export { StartFunc };