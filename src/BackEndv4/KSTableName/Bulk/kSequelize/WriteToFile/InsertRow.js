import { StartFunc as StartFuncInitializeSequelizeWithTableName } from "../modals/initializeSequelizeWithTableName.js";
import { StartFunc as StartFuncPrimaryKey } from "../modals/GetTableInfo/PrimaryKey.js";

let StartFunc = async (inPostBody) => {
  let LocalReturnData = {};
  LocalReturnData.KTF = false;

  let localInDataToInsert = inPostBody;

  const LocalTableData = await StartFuncInitializeSequelizeWithTableName();

  const LocalFromBuild = LocalTableData.build(localInDataToInsert);

  let localNewAfterSave;
  let localPrimaryKey = await StartFuncPrimaryKey();

  try {
    localNewAfterSave = await LocalFromBuild.save();
    LocalReturnData.KTF = true;
    LocalReturnData.pk = localNewAfterSave.id;

  } catch (error) {
    return await {
      KTF: false,
      KReason: { ErrorFrom: process.cwd(), sqliteError: error },
    };
  }

  return await LocalReturnData;
};

export { StartFunc };
