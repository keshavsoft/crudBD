import { StartFunc as StartFuncPullData } from "../PullData/EntryFile.js";

let StartFunc = async ({ inFilterCondition }) => {
  let LocalFilterCondition = inFilterCondition;

  let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

  let LocalStartFuncPullData = StartFuncPullData();

  if (LocalStartFuncPullData === false) {
    LocalReturnData.KReason = LocalStartFuncPullData.KReason;
    return LocalReturnData;
  };

  const db = LocalStartFuncPullData.inDb;
  let LocalarrayOfObjects = db.data;
  // console.log("LocalarrayOfObjects : ", LocalarrayOfObjects);
  // let LocalFindId1 = LocalarrayOfObjects.filter(e => e.Date >= "2024-04-09" && e.Date <= "2024-04-10");
  // console.log("LocalFindId1 : ", LocalFindId1.length);

  let LocalFindId = LocalarrayOfObjects.filter(e => eval(LocalFilterCondition));

  if (LocalFindId.length === 0) {
    LocalReturnData.KReason = "No Data"
    return LocalReturnData;
  };

  LocalReturnData.KTF = true;
  LocalReturnData.JsonData = LocalFindId;

  return await LocalReturnData;
};

export { StartFunc };
