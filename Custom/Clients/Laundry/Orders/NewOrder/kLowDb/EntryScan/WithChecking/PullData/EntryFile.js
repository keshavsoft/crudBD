import { StartFunc as StartFuncReturnDbObjectWithSchema } from '../../../CommonFuncs/ReturnDbObjectWithSchema.js';

let StartFunc = ({ inBranch }) => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    const dbFromDbObjectWithSchema = StartFuncReturnDbObjectWithSchema({ inTable: inBranch });

    const db = dbFromDbObjectWithSchema.dbObject;

    db.read();

    if ("error" in db.data) {
        return db.data;
    };

    if (Array.isArray(db.data) === false) {
        LocalReturnData.KReason = "Not array inside Json file...";

        return LocalReturnData;
    };

    if (db.data.length !== 0) {
        let lastRowData = db.data[db.data.length - 1]
        if (Object.values(lastRowData.ItemsInOrder).length === 0) {
            LocalReturnData.KReason = "Last Order items empty.";
            return LocalReturnData;
        }
    };

    LocalReturnData.KTF = true;
    LocalReturnData.inDb = db
    LocalReturnData.inTableSchema = dbFromDbObjectWithSchema.TableSchema

    return LocalReturnData;
};

export { StartFunc };