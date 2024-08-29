import { StartFunc as StartFuncPullData } from "../PullData/EntryFile.js";

let StartFunc = async ({ inId }) => {
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

  LocalReturnData.KTF = true;
  LocalReturnData.JsonData = LocalFindId;

  return await LocalReturnData;
};

export { StartFunc };
