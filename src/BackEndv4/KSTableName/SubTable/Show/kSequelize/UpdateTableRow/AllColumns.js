import { StartFunc as StartFuncInitializeSequelizeWithTableName } from "../modals/initializeSequelizeWithTableName.js";
import { StartFunc as StartFuncPrimaryKey } from "../modals/GetTableInfo/PrimaryKey.js";

let StartFunc = async ({ inDataToUpdate, inId }) => {
  let localInDataToUpdate = inDataToUpdate;

  const LocalTableData = await StartFuncInitializeSequelizeWithTableName();
  const LocalPrimaryKeyName= await StartFuncPrimaryKey();
  const LocalPrimaryKeyValue = inId;
  try {
    const recordToUpdate = await LocalTableData.findOne({
      where: {
        [LocalPrimaryKeyName]: LocalPrimaryKeyValue
      }
    });
    if (!recordToUpdate) {
      return {
        KTF: false,
        KReason: "Record not found"
      };
    }
    await recordToUpdate.update(localInDataToUpdate);
    return recordToUpdate;
  } catch (error) {
    return {
      KTF: false,
      KReason: { ErrorFrom: process.cwd(), sqliteError: error}
    };
  }
};

export { StartFunc };
