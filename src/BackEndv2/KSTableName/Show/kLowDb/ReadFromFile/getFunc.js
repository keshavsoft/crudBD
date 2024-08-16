import { StartFunc as StartFuncPullData } from "../PullData/EntryFile.js";

let StartFunc = () => {
  let LocalReturnData = { KTF: false };

  let LocalStartFuncPullData = StartFuncPullData();

  if ("error" in LocalStartFuncPullData) {
    LocalReturnData.KReason = LocalStartFuncPullData.error;
    return LocalReturnData;
  };

  const db = LocalStartFuncPullData.inDb;
  db.read();

  LocalReturnData.KTF = true;
  LocalReturnData.JsonData = db.data;

  return LocalReturnData;
};

export { StartFunc };
