import { StartFunc as StartFuncInitializeSequelizeWithTableName } from '../modals/initializeSequelizeWithTableName.js';

let StartFunc = async () => {
    try {
        const LocalTableData = await StartFuncInitializeSequelizeWithTableName();

        const users = await LocalTableData.findAll();

        const records = users.map(function (result) {
            return result.dataValues;
        });

        return await records;
    } catch (error) {
        return await {
            KTF: false,
            KReason: { ErrorFrom: process.cwd(), sequelizeError: error },
        };
    };
};

export { StartFunc };