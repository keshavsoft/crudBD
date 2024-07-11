import { StartFunc as StartFuncAssignSchema } from "../../../../../bin/kSequelize/AssignSchema.js";

let StartFunc = async () => {
    const sequelize = await StartFuncAssignSchema();

    sequelize.sync({ force: true });
};

export { StartFunc }

// StartFunc().then();
