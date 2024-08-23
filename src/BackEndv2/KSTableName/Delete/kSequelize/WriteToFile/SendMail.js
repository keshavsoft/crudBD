import { StartFunc as StartFuncInitializeSequelizeWithTableName } from "../modals/initializeSequelizeWithTableName.js";
import { StartFunc as StartFuncPrimaryKey } from "../modals/GetTableInfo/PrimaryKey.js";
let StartFunc = async (inPostBody) => {
  let localInDataToInsert = inPostBody;

  const LocalTableData = await StartFuncInitializeSequelizeWithTableName();

  const LocalFromBuild = LocalTableData.build(localInDataToInsert);

  let localNewAfterSave;
  let localPrimaryKey = await StartFuncPrimaryKey();

  try {
    localNewAfterSave = await LocalFromBuild.save();
  } catch (error) {
    return await {
      KTF: false,
      KReason: { ErrorFrom: process.cwd(), sqliteError: error },
    };
  }

  return await localNewAfterSave[localPrimaryKey];
};

export { StartFunc };
