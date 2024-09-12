import { StartFunc as StartFuncPullData } from "../PullData/EntryFile.js";

let StartFunc = async ({ inKey, inValue }) => {
  let LocalinKey = inKey;
    let LocalValue = inValue;

  let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };


  let LocalStartFuncPullData = StartFuncPullData();

  if (LocalStartFuncPullData === false) {
    LocalReturnData.KReason = LocalStartFuncPullData.KReason;
    return LocalReturnData;
  };

  const db = LocalStartFuncPullData.inDb;
  let LocalarrayOfObjects = db.data;
    let LocalFindId = LocalarrayOfObjects.filter(e => e[LocalinKey] == LocalValue);

    if (LocalFindId.length === 0) {
      LocalReturnData.KReason = "No Data"
      return LocalReturnData;
  };

  LocalReturnData.KTF = true;
  LocalReturnData.JsonData = LocalFindId;

  return await LocalReturnData;
};

export { StartFunc };
