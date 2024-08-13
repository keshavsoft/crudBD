import { StartFunc as StartFuncPullData } from "../PullData/EntryFile.js";
import ConfigJson from '../../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
  let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

  let LocalStartFuncPullData = StartFuncPullData();

  if (LocalStartFuncPullData === false) {
    LocalReturnData.KReason = LocalStartFuncPullData.KReason;
    return LocalReturnData;
  };

  const db = LocalStartFuncPullData.inDb;
  db.read();
  let LocalDataNeeded = db.read();

  LocalReturnData.KTF = true;
  LocalReturnData.JsonData = LocalDataNeeded;

  return await LocalReturnData;
};

export { StartFunc };
