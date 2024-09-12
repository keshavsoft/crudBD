import { MongoClient } from "mongodb";
import { startFunc as startFuncForPassword } from "../commonFuncs/forPassword.js";
import { startFunc as startFuncForUrl } from "../commonFuncs/forUrl.js";
import configJson from '../../../../Config.json' assert {type: 'json'};
import tableJson from "../../../tableName.json" assert {type: 'json'};
import path from "path";

let StartFunc = async (inPostBody) => {
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
        const insertResult = await collection.insertOne(inPostBody);

        if (insertResult.acknowledged === true) {
            LocalReturnData.KTF = true;
            LocalReturnData.pk = insertResult.insertedId;
            return await LocalReturnData;
        };

        return await LocalReturnData;
    } catch (error) {
        console.log("error : ", error);
        return await {
            KTF: false,
            KReason: { ErrorFrom: process.cwd(), sequelizeError: error },
        };
    };
};

export { StartFunc };