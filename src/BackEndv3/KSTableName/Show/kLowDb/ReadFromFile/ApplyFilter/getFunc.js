import { StartFunc as StartFuncPullData } from "../../PullData/EntryFile.js";

let StartFunc = ({ inFindValue, inFindKey }) => {
  let LocalFindKey = inFindKey;
  let LocalFindValue = inFindValue;

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
  LocalReturnData.JsonData = LocalFuncApplyFilers({
    inFindValue: LocalFindValue, inFindKey: LocalFindKey,
    inData: LocalData
  });

  return LocalReturnData;
};

const LocalFuncApplyFilers = ({ inFindValue, inFindKey, inData }) => {
  let LocalFindKey = inFindKey;
  let LocalFindValue = inFindValue;

  let LocalFilterData = inData.filter(e => {
    return eval(LocalFindKey) == LocalFindValue
  });

  return LocalFilterData;
};

export { StartFunc };
