import { StartFunc as StartFuncInitializeSequelizeWithTableName } from '../modals/initializeSequelizeWithTableName.js';

let StartFunc = async ({ inId }) => {
    try {
        const LocalTableData = await StartFuncInitializeSequelizeWithTableName();

        const users = await LocalTableData.findOne({ where: { id: inId } });

        return await users.dataValues;
    } catch (error) {
        return await error;
    };
};

export { StartFunc };