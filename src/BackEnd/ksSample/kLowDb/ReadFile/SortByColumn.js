import { StartFunc as StartFuncPullData } from "../PullData/EntryFile.js";

let StartFunc = async ({ inColumn }) => {
  let LocalColumn = inColumn;

  let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

  let LocalStartFuncPullData = StartFuncPullData();

  if (LocalStartFuncPullData === false) {
    LocalReturnData.KReason = LocalStartFuncPullData.KReason;
    return LocalReturnData;
  };

  const db = LocalStartFuncPullData.inDb;
  let LocalarrayOfObjects = db.data;

  let localSorted = LocalarrayOfObjects.sort((firstItem, secondItem) => firstItem[LocalColumn] - secondItem[LocalColumn]);


  LocalReturnData.KTF = true;
  LocalReturnData.JsonData = localSorted;

  return await LocalReturnData;
};

export { StartFunc };
