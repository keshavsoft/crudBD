import fs from "fs";

import { StartFunc as StartFuncReturnDbObject } from "./CommonFuncs/ReturnDbObject.js";

let StartFunc = ({InId}) => {
    let LocalId=InId;
    let LocalReturnData = { KTF: false }

    let LocalFromLowDb = StartFuncReturnDbObject();
    LocalFromLowDb.read();

    if (LocalFromLowDb.data.length === 0) {
        LocalReturnData.KReason = "No Data"
        return LocalReturnData;
    };

    let LocalFindData= LocalFromLowDb.data.find(e=>e.UuId == LocalId)
    if (LocalFindData=== undefined) {
        LocalReturnData.KReason = "No Data";
        return LocalReturnData;   
    };
    let LocalDelete= deleteObjectById({ inCollection:LocalFromLowDb.data, inId:LocalId });
    LocalFromLowDb.data=LocalDelete;
    LocalFromLowDb.write();

    return true;
};

let deleteObjectById = ({ inCollection, inId }) => {
    let LocalCollection = inCollection;
    let LocalId = inId;
  
    LocalCollection.splice(
      LocalCollection.findIndex((a) => a.UuId == LocalId),
      1
    );
  
    return LocalCollection;
  };

export { StartFunc };
