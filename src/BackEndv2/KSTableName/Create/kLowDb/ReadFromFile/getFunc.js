import { StartFunc as StartFuncPullData } from "../PullData/EntryFile.js";

let StartFunc = async () => {
  let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

  let LocalStartFuncPullData = StartFuncPullData();

  if (LocalStartFuncPullData === false) {
    LocalReturnData.KReason = LocalStartFuncPullData.KReason;
    return LocalReturnData;
  };

  const db = LocalStartFuncPullData.inDb;
  db.read();

  LocalReturnData.KTF = true;
  LocalReturnData.JsonData = db.data;

  return await LocalReturnData;
};

export { StartFunc };
