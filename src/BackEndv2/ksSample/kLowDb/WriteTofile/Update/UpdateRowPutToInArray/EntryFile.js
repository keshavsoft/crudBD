import { StartFunc as StartFuncPullData } from "../../../PullData/EntryFile.js";

let StartFunc = async ({ inDataToUpdate, inId }) => {
  let LocalDataToUpdate = inDataToUpdate;

  let LocalId = parseInt(inId);
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

  LocalUpdateRow({
    inFindRow: LocalFindId,
    inDataToUpdate: LocalDataToUpdate
  });

  db.write();

  LocalReturnData.KTF = true;

  return await LocalReturnData;
};

const LocalUpdateRow = ({ inFindRow, inDataToUpdate }) => {
  let LocalDataToUpdate = inDataToUpdate;
  let LocalFindRow = inFindRow;

  Object.entries(inDataToUpdate).forEach(
    ([key, value]) => {
      LocalFindRow[key] = LocalDataToUpdate[key];
    }
  );
};

export { StartFunc };
