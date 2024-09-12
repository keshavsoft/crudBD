import { StartFunc as StartFuncInitializeSequelize } from "./initializeSequelize.js";
import { DataTypes } from "sequelize";

import ConfigJson from '../Config.json' assert {type: 'json'};
import path from "path";

let StartFunc = async () => {
    const sequelize = await StartFuncInitializeSequelize();

    ConfigJson.jsonConfig.tableAndColumns.children.forEach(element => {
        for (const property in element.fileData) {
            if (element.fileData[property].type === "STRING") {
                element.fileData[property].type = DataTypes.STRING;
            };

            if (element.fileData[property].type === "NUMBER") {
                element.fileData[property].type = DataTypes.INTEGER;
            };

            if (element.fileData[property].type === "INTEGER") {
                element.fileData[property].type = DataTypes.INTEGER;
            };

            if (element.fileData[property].type === "DATE") {
                element.fileData[property].type = DataTypes.DATE;
            };
        };

        sequelize.define(path.parse(element.name).name, element.fileData,
            { freezeTableName: true, timestamps: false, });

        //sequelize.define(path.parse(element.name).name, element.fileData, { freezeTableName: true });
    });

    return await sequelize;
    // sequelize.sync({ force: true });
};

export { StartFunc };