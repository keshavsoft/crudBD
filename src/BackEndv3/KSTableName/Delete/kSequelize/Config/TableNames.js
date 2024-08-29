import { StartFunc as StartFuncInitializeSequelize } from '../modals/initializeSequelize.js';

import dotenv from 'dotenv';
dotenv.config();

let StartFunc = async () => {
    const sequelize = StartFuncInitializeSequelize();

    let LocalTablesData = await sequelize.getQueryInterface().showAllSchemas();

    return await LocalTablesData;
};

export { StartFunc };