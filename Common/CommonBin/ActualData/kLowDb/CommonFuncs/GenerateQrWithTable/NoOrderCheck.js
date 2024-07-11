import { StartFunc as StartFuncCommonFuncs } from './ReturnDbObject.js';

let StartFunc = ({ inTable, inId }) => {
    let LocalId = inId;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    LocalReturnData.KTF = false;

    const db = StartFuncCommonFuncs({ inTable });
    db.read();
    let LocalRowNeeded = db.data.find(e => e.pk == LocalId);

    if (LocalRowNeeded === undefined) {
        LocalReturnData.KReason = "No Orders";
        return LocalReturnData;

    };

    LocalReturnData.JsonData = LocalRowNeeded;
    LocalReturnData.KTF = true;

    return LocalReturnData;
};

export { StartFunc };