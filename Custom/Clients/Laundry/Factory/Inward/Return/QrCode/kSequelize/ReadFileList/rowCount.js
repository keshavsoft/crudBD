import { StartFunc as StartFuncInitializeSequelizeWithTableName } from '../modals/initializeSequelizeWithTableName.js';

let StartFunc = async () => {
    try {
        const LocalTableData = await StartFuncInitializeSequelizeWithTableName();

        const users = await LocalTableData.findAll();
        
        return await users.length;
    } catch (error) {
        return await error;
    };
};

export { StartFunc };