import fs from "fs";

import { StartFunc as StartFuncReturnDbObject } from "./CommonFuncs/ReturnDbObject.js";

let StartFunc = ({ inDataToUpdate, inId }) => {
  let LocalDataToUpdate = inDataToUpdate;
  let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

  LocalReturnData.KTF = false;

  const db = StartFuncReturnDbObject();
  db.read();

  let LocalFindRow = db.data.find((element) => {
    return element.UuId == inId;
  });

  // console.log("Bhaskar: ", LocalFindRow);
  LocalUpdateRow({
    inFindRow: LocalFindRow,
    inDataToUpdate: LocalDataToUpdate,
  });

  db.write();

  return true;
};

const LocalUpdateRow = ({ inFindRow, inDataToUpdate }) => {
  let LocalDataToUpdate = inDataToUpdate;
  let LocalFindRow = inFindRow;

  Object.entries(LocalFindRow).forEach(([key, value]) => {
    if (key in LocalDataToUpdate) {
      LocalFindRow[key] = LocalDataToUpdate[key];
    }
  });
};

export { StartFunc };
