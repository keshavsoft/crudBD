import { StartFunc as WithChecking } from "../WithChecking/StartFunc.js";
import { StartFunc as mail } from "../../../../../mail/sendForRowInsert.js";

let StartFunc = async ({ inDataToInsert }) => {
    let LocalFromSave = WithChecking({ inDataToInsert });

    if (LocalFromSave.KTF) {
        return await mail({ inDataPk: LocalFromSave.pk });
    };
};

export { StartFunc };