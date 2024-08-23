import { StartFunc as StartFuncPullData } from "../../../PullData/EntryFile.js";

let StartFunc = async ({ inDataToUpdate, inId, inKeyName }) => {
  let LocalDataToUpdate = inDataToUpdate;

  let LocalId = inId;
  let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

  let LocalStartFuncPullData = StartFuncPullData();

  if (LocalStartFuncPullData === false) {
    LocalReturnData.KReason = LocalStartFuncPullData.KReason;
    return LocalReturnData;
  };

  const db = LocalStartFuncPullData.inDb;
  let LocalarrayOfObjects = db.data;

  const LocalFindId = LocalarrayOfObjects.find((obj) => obj.pk == LocalId);

  if (LocalFindId === undefined) {
    return await { KTF: false, KReason: "Id not found in data" };
  };

  if (inKeyName in LocalFindId === false) {
    return await { KTF: false, KReason: "Key not found in data" };
  };

  LocalInsertToObject({
    inFindKeyName: LocalFindId[inKeyName],
    inDataToUpdate: LocalDataToUpdate
  });

  db.write();

  LocalReturnData.KTF = true;

  return await LocalReturnData;
};

let LocalFuncReturnData = () => {
  let LocalStartFuncPullData = StartFuncPullData();

  if (LocalStartFuncPullData === false) {
    return [];
  };

  const db = LocalStartFuncPullData.inDb;
  let LocalarrayOfObjects = db.data;

  return LocalarrayOfObjects;
};

const LocalInsertToObject = ({ inFindKeyName, inDataToUpdate }) => {
  let LocalDataToUpdate = inDataToUpdate;
  let LocalFindKeyName = inFindKeyName;

  let LocalKeyArray = Object.keys(LocalFindKeyName);
  let numberArray = LocalKeyArray.map(Number);

  let MaxPk = (Math.max(...numberArray, 0) + 1);
  LocalFindKeyName[MaxPk] = LocalDataToUpdate;
};

export { StartFunc };
