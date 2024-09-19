import { StartFunc as StartFuncPullData } from "../../PullData/EntryFile.js";
import _ from "lodash";

let StartFunc = ({ inFilterObject }) => {
  let LocalFilterObject = inFilterObject;

  let LocalReturnData = { KTF: false };

  let LocalStartFuncPullData = StartFuncPullData();

  if ("error" in LocalStartFuncPullData) {
    LocalReturnData.KReason = LocalStartFuncPullData.error;
    return LocalReturnData;
  };

  const db = LocalStartFuncPullData.inDb;
  db.read();
  const LocalData = db.data;

  LocalReturnData.KTF = true;
  LocalReturnData.JsonData = _.filter(LocalData, LocalFilterObject);

  return LocalReturnData;
};

export { StartFunc };
