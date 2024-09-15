import { MongoClient } from "mongodb";
import path from "path";
import configJson from '../../../../Config.json' assert {type: 'json'};
import { startFunc as startFuncForPassword } from "../commonFuncs/forPassword.js";
import { startFunc as startFuncForUrl } from "../commonFuncs/forUrl.js";
import tableJson from "../../../tableName.json" assert {type: 'json'};

let StartFunc = async () => {
    let LocalReturnData = {};
    LocalReturnData.KTF = false;

    try {
        const password = startFuncForPassword();
        let url = startFuncForUrl();
        const dbName = configJson.mongoDbConfig.DbName;
        const LocalcollectionName = path.parse(tableJson.tableName).name;

        url = url.replace("<password>", password);

        const client = new MongoClient(url);

        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(LocalcollectionName);
        let serverData = await collection.find().toArray();

        LocalReturnData.LastRow = serverData[serverData.length - 1];
        LocalReturnData.KTF = true;

        return await LocalReturnData;
    } catch (error) {
        return await {
            KTF: false,
            KReason: { ErrorFrom: process.cwd(), sequelizeError: error },
        };
    };
};

export { StartFunc };