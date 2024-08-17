import { MongoClient, ObjectId } from "mongodb";
import { startFunc as startFuncForPassword } from "../commonFuncs/forPassword.js";
import { startFunc as startFuncForUrl } from "../commonFuncs/forUrl.js";
// const { ObjectId } = require('mongodb');
import  path  from "path";
import configJson from '../../../../Config.json' assert {type: 'json'};
import tableJson from "../../../tableName.json" assert {type: 'json'};

let StartFunc = async ({ inDataToUpdate, inId }) => {
    try {
        const password = startFuncForPassword();

        let url = startFuncForUrl();
        const dbName = configJson.mongoDbConfig.DbName;

        const LocalcollectionName = path.parse(tableJson.tableName).name;

        url = url.replace("<password>", password);

        const client = new MongoClient(url);

        await client.connect();
        // console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection(LocalcollectionName);

        const updateResult = await collection.updateOne( { _id: new ObjectId(inId) } , { $set: inDataToUpdate} );

        return await updateResult;
    } catch (error) {
        console.log("error : ", error);
        return await {
            KTF: false,
            KReason: { ErrorFrom: process.cwd(), sequelizeError: error },
        };
    };
};

export { StartFunc };