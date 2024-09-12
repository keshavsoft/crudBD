import { DataTypes } from "sequelize";
// import columnsJson from './columns.json' assert {type: 'json'};

const dataColumns = {
    Name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Mobile: {
        type: DataTypes.NUMBER,
        allowNull: false,
        defaultValue: 316
    }
};

export { dataColumns };