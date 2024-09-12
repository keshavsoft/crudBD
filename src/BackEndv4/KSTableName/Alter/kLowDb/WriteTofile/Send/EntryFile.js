import { StartFunc as WithChecking } from "../WithChecking/StartFunc.js";
import { StartFunc as mail } from "./sendMail.js";

let StartFunc = async ({ inDataToInsert }) => {
    let LocalFromSave = WithChecking({ inDataToInsert });

    if (LocalFromSave.KTF) {
        return await mail({ inDataPk: LocalFromSave.pk });
    };
};

export { StartFunc };