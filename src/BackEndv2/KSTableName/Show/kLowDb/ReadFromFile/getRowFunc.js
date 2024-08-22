import { StartFunc as StartFuncPullData } from "../PullData/EntryFile.js";

let StartFunc = ({ inId }) => {
  let LocalId = parseInt(inId);

  let LocalReturnData = { KTF: false };

  let LocalStartFuncPullData = StartFuncPullData();

  if ("error" in LocalStartFuncPullData) {
    LocalReturnData.KReason = LocalStartFuncPullData.error;
    return LocalReturnData;
  };

  const db = LocalStartFuncPullData.inDb;
  db.read();

  let LocalFindData = db.data.filter(el => el.pk === LocalId);

  LocalReturnData.KTF = true;
  LocalReturnData.JsonData = LocalFindData;

  return LocalReturnData;
};

export { StartFunc };
