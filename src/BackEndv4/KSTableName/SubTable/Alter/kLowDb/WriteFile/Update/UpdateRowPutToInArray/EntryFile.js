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

  LocalReturnData.pk = LocalInsertToObject({
    inFindKeyName: LocalFindId[inKeyName],
    inDataToUpdate: LocalDataToUpdate
  });

  db.write();
  return await LocalReturnData.pk;
};


const LocalInsertToObject = ({ inFindKeyName, inDataToUpdate }) => {
  let LocalDataToUpdate = inDataToUpdate;
  let LocalFindKeyName = inFindKeyName;

  let LocalArrayPk = LocalFindKeyName.map(element => element.pk);

  let LocalRemoveUndefined = LocalArrayPk.filter(function (element) {
    return element !== undefined;
  });

  let numberArray = LocalRemoveUndefined.map(Number);
  let MaxPk = (Math.max(...numberArray, 0) + 1);
  let InsertData = { ...LocalDataToUpdate, UuId: MaxPk, pk: MaxPk, DateTime: Timestamp() };

  LocalFindKeyName.push(InsertData);
  return MaxPk;
};

const Timestamp = () => {
  let currentDate = new Date();
  let formattedDate = currentDate.toISOString();
  return formattedDate;
};

export { StartFunc };
