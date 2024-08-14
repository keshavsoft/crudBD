import { StartFunc as WithChecking } from "../WithChecking/StartFunc.js";
import { StartFunc as mail } from "../../../../../mail/sendForRowInsert.js";

let StartFunc = async ({ inDataToInsert, inDomainName }) => {
    let LocalFromSave = WithChecking({ inDataToInsert });

    if (LocalFromSave.KTF) {
        return await mail({ inDataPk: LocalFromSave.pk, inDomainName });
    };
};

export { StartFunc };