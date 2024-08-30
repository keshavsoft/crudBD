import { StartFunc as StartFuncInitializeSequelizeWithTableName } from '../modals/initializeSequelizeWithTableName.js';

let StartFunc = async (inPostBody) => {
    const LocalTableData = await StartFuncInitializeSequelizeWithTableName();

    if ("KTF" in LocalTableData) {
        if (LocalTableData.KTF === false) {
            return await LocalTableData;
        };
    };

    try {
        const LocalFromBuild = await LocalTableData.bulkCreate(inPostBody);

        return await LocalFromBuild;
    } catch (error) {
        return await { KTF: false, KReason: error, ErrorFrom: process.cwd() };
    };
};

export { StartFunc };

