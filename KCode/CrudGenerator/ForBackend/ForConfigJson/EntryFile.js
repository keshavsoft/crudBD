import fs from 'fs';
import ConfigJson from '../../../Config.json' assert {type: 'json'};

let StartFunc = async ({ inTablesCollection, inFrom, inTo }) => {
    let LocalFileName = "Config.json";
    let LocalFrom = inFrom;
    let LocalTo = inTo;

    let LocalFileData = fs.readFileSync(`${LocalFrom}/${LocalFileName}`);
    let LocalfileNameJsonData = JSON.parse(LocalFileData);

    if (ConfigJson.isSequelize) {
        LocalfileNameJsonData.isSequelize = ConfigJson.isSequelize;
        LocalfileNameJsonData.sequelizeConfig = ConfigJson.sequelizeConfig;

        LocalfileNameJsonData.sequelizeConfig.tableAndColumns = inTablesCollection;
        LocalfileNameJsonData.sequelizeConfig.DataPk = ConfigJson.ToDataDetails.DataPk;
        LocalfileNameJsonData.sequelizeConfig.DbName = ConfigJson.ToDataDetails.DbName;
        LocalfileNameJsonData.sequelizeConfig.DataPath = ConfigJson.ToDataDetails.DataPath;
    } else {
        LocalfileNameJsonData.isMongoDb = ConfigJson.isMongoDb;
    };

    LocalfileNameJsonData.jsonConfig.tableAndColumns = inTablesCollection;
    LocalfileNameJsonData.jsonConfig.DataPk = ConfigJson.ToDataDetails.DataPk;
    LocalfileNameJsonData.JsonPath = `${ConfigJson.JsonPath}/${ConfigJson.ToDataDetails.DataPk}`;

    fs.writeFileSync(`${LocalTo}/${LocalFileName}`, JSON.stringify(LocalfileNameJsonData));
};

export { StartFunc };