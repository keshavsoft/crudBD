import { StartFunc as StartFuncAssignSchema } from "../../../../src/kSequelize/AssignSchema.js";

let StartFunc = async () => {
    const sequelize = await StartFuncAssignSchema();
    sequelize.sync({ force: true });
};

export { StartFunc };