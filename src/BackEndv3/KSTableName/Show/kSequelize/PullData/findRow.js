import { StartFunc as StartFuncInitializeSequelizeWithTableName } from '../modals/initializeSequelizeWithTableName.js';

let StartFunc = async ({ inId }) => {
    try {
        const LocalReturnData = {};
        const LocalTableData = await StartFuncInitializeSequelizeWithTableName();

        const users = await LocalTableData.findAll();

        const records = users.map(function (result) {
            return result.dataValues;
        });
        // console.log("aaaaaaaaaaaaa bbbbbbbbb : ", records);
        const RowNeeded = records.find(element => {
            return element.id === parseInt(inId);
        });

        LocalReturnData.KTF = true;
        LocalReturnData.JsonData = RowNeeded;

        return await LocalReturnData;
    } catch (error) {
        return await {
            KTF: false,
            KReason: { ErrorFrom: process.cwd(), sequelizeError: error },
        };
    };
};

export { StartFunc };