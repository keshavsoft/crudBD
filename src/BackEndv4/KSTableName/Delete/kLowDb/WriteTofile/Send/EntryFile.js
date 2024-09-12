import { StartFunc as WithChecking } from "../WithChecking/StartFunc.js";
import { StartFunc as sendMail } from "./sendMail.js";

let StartFunc = async ({ inDataToInsert, inDomainName }) => {
    let LocalFromSave = WithChecking({ inDataToInsert });

    if (LocalFromSave.KTF === false) {
        return await LocalFromSave;
    };

    return await sendMail({ inDataPk: LocalFromSave.pk, inDomainName });
};

export { StartFunc };