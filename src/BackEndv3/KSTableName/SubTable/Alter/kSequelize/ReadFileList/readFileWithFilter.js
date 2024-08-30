import { StartFunc as StartFuncInitializeSequelizeWithTableName } from '../modals/initializeSequelizeWithTableName.js';
import _ from "lodash";

let StartFunc = async ({ inFilterObject }) => {
    try {
        let LocalFilterObject = inFilterObject;

        const LocalFromSequelize = await StartFuncInitializeSequelizeWithTableName();

        const users = await LocalFromSequelize.findAll();

        const LocalTableData = users.map(function (result) {
            return result.dataValues;
        });

        let LocalFilteredArray = _.filter(LocalTableData, LocalFilterObject);

        return await LocalFilteredArray;
    } catch (error) {
        return await error;
    };
};

export { StartFunc };