import { StartFunc as StartFuncPullData } from "../PullData/EntryFile.js";

let StartFunc = async ({ inId }) => {
  let LocalId = inId;
  
  let LocalStartFuncPullData = StartFuncPullData();

  if (LocalStartFuncPullData === false) {
      LocalReturnData.KReason = LocalStartFuncPullData.KReason;
      return LocalReturnData;
  };

  const LocalTableSchema = LocalStartFuncPullData.inTableSchema;
  const db = LocalStartFuncPullData.inDb;
  let LocalarrayOfObjects = db.data;

  const LocalFindId = LocalarrayOfObjects.find((obj) => obj.UuId === LocalId);

  if (LocalFindId === undefined) {
    return await { KTF: false, KReason: "Id not found in data" };
  };

  let LocalArrayAfterDelete = deleteObjectById({
    inCollection: LocalarrayOfObjects,
    inId: LocalId,
  });

  db.data = LocalArrayAfterDelete;
  db.write();

  return await true;
};

let deleteObjectById = ({ inCollection, inId }) => {
  let LocalCollection = inCollection;
  let LocalId = inId;

  LocalCollection.splice(
    LocalCollection.findIndex((a) => a.UuId === LocalId),
    1
  );

  return LocalCollection;
};

export { StartFunc };
