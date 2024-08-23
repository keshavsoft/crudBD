import { StartFunc as StartFuncPullData } from "../PullData/EntryFile.js";

let StartFunc = async ({ inKey }) => {
  let LocalinKey = inKey;

  let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };


  let LocalStartFuncPullData = StartFuncPullData();

  if (LocalStartFuncPullData === false) {
    LocalReturnData.KReason = LocalStartFuncPullData.KReason;
    return LocalReturnData;
  };

  const db = LocalStartFuncPullData.inDb;
  let LocalarrayOfObjects = db.data;
    let LocalMapByKey = LocalarrayOfObjects.filter(e => e.hasOwnProperty(LocalinKey));

    if (LocalMapByKey.length === 0) {
      LocalReturnData.KReason = "No Data"
      return LocalReturnData;
  };

  LocalReturnData.KTF = true;
  LocalReturnData.JsonData = LocalMapByKey.length;

  return await LocalReturnData;
};

export { StartFunc };
