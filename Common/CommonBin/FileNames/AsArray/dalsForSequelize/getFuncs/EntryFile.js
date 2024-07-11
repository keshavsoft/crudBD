import { StartFunc as getTablesWithSchema } from '../../kSequelize/getTablesWithSchema.js';

let GetFunc = async () => {
    return await getTablesWithSchema();
};

export { GetFunc };