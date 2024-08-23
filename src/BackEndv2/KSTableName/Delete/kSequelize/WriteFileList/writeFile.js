import { StartFunc as StartFuncInitializeSequelizeWithTableName } from "../modals/initializeSequelizeWithTableName.js";

let StartFunc = async (inPostBody) => {
  let localInDataToInsert = inPostBody;

  const LocalTableData = await StartFuncInitializeSequelizeWithTableName();

  const LocalFromBuild = LocalTableData.build(localInDataToInsert);

  let localNewAfterSave;

  try {
    localNewAfterSave = await LocalFromBuild.save();
  } catch (error) {
    return await {
      KTF: false,
      KReason: { ErrorFrom: process.cwd(), sqliteError: error },
    };
  }

  return await localNewAfterSave.id;
};

export { StartFunc };
