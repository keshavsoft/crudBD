import { StartFunc as StartFuncPullData } from "../PullData/EntryFile.js";

let StartFunc = async ({ inKeyName }) => {
  let LocalKeyName = inKeyName;
  let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

  let LocalStartFuncPullData = StartFuncPullData();

  if (LocalStartFuncPullData === false) {
    LocalReturnData.KReason = LocalStartFuncPullData.KReason;
    return LocalReturnData;
  };

  const db = LocalStartFuncPullData.inDb;
  let LocalarrayOfObjects = db.data;

  const LocalArrayToSend = getUniqueArr(LocalarrayOfObjects, LocalKeyName);

  LocalReturnData.KTF = true;
  LocalReturnData.JsonData = LocalArrayToSend.sort();

  
  return await LocalReturnData;
};

function getUniqueArr(arr, inId) {
  const mapObj = {};

  arr.forEach(a => {
    mapObj[a[inId]] = a
  });

  return Object.keys(mapObj, inId);
};

export { StartFunc };
