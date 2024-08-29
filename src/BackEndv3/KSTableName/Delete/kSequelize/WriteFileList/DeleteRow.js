import { StartFunc as StartFuncInitializeSequelizeWithTableName } from "../modals/initializeSequelizeWithTableName.js";
import { StartFunc as StartFuncPrimaryKey } from "../modals/GetTableInfo/PrimaryKey.js";

let StartFunc = async ({inId }) => {

  const LocalTableData = await StartFuncInitializeSequelizeWithTableName();
  const LocalPrimaryKeyName= await StartFuncPrimaryKey();
  const LocalPrimaryKeyValue = inId;
  try {
    const recordToDelete = await LocalTableData.findOne({
      where: {
        [LocalPrimaryKeyName]: LocalPrimaryKeyValue
      }
    });
    await recordToDelete.destroy();
    return recordToDelete;
  } catch (error) {
    return {
      KTF: false,
      KReason: { ErrorFrom: process.cwd(), sqliteError: error}
    };
  }
};

export { StartFunc };