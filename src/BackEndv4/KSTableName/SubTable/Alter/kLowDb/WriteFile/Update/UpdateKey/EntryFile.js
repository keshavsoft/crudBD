import { StartFunc as StartFuncPullData } from "../../../PullData/EntryFile.js";

let StartFunc = async ({ inId, inKey, inValue }) => {
  let LocalId = parseInt(inId);
  let LocalKey = inKey;
  let LocalValue = inValue;

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
    inKey: LocalKey, inValue: LocalValue,
    inFindRow: LocalFindId
  });

  db.write();

  LocalReturnData.KTF = true;

  return await LocalReturnData;
};

const LocalUpdateRow = ({ inKey, inValue, inFindRow }) => {
  let LocalFindRow = inFindRow;
  let LocalKey = inKey;
  let LocalValue = inValue;

  Object.entries(LocalFindRow).forEach(
    ([key, value]) => {
      if (key === LocalKey) {
        LocalFindRow[LocalKey] = LocalValue
      }
    }
  );
};

export { StartFunc };
