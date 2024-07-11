import { LowSync } from 'lowdb'
import { JSONFileSync } from 'lowdb/node'
import Configjson from '../../../../../Config.json' assert { type: 'json' };
const commonTaleName = "Items.json";
let StartFunc = async () => {

  let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

  let LocalStartFuncPullData = LocalPullData();

  if (LocalStartFuncPullData === false) {
    LocalReturnData.KReason = LocalStartFuncPullData.KReason;
    return LocalReturnData;
  };

  const db = LocalStartFuncPullData.inDb;
  let LocalarrayOfObjects = db.data;

  return await LocalarrayOfObjects;
};

let LocalPullData = () => {
  let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

  LocalReturnData.KTF = false;

  const dbFromDbObjectWithSchema = LocalFuncForLowDb();

  const db = dbFromDbObjectWithSchema.dbObject;

  db.read();

  if ("error" in db.data) {
    return db.data;
  };

  if (Array.isArray(db.data) === false) {
    LocalReturnData.KReason = "Not array inside Json file...";

    return LocalReturnData;
  };

  LocalReturnData.KTF = true;
  LocalReturnData.inDb = db
  LocalReturnData.inTableSchema = dbFromDbObjectWithSchema.TableSchema

  return LocalReturnData;
};

let LocalFuncForLowDb = () => {
  let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

  LocalReturnData.KTF = false;

  LocalReturnData.UserDataFilePath = `${Configjson.jsonConfig.DataPath}/${Configjson.jsonConfig.DataPk}/${commonTaleName}`;

  const defaultData = { error: "From KLowDb" }

  const db = new LowSync(new JSONFileSync(LocalReturnData.UserDataFilePath), defaultData);

  return {
    dbObject: db
  };
};

let LocalFuncForTableSchema = () => {
  let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

  LocalReturnData.KTF = false;

  let LocalSecondNeeded = Configjson.jsonConfig.tableAndColumns.children.find(element => {
    return "children" in element === false && element.name === commonTaleName;
  });

  return LocalSecondNeeded;
};
export { StartFunc };
