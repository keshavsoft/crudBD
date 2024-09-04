import { StartFunc as WithChecking } from "../WithChecking/StartFunc.js";
import { StartFunc as SendMail } from "./SendMail/EntryFile.js";

let StartFunc = async ({ inDataToInsert, inDomainName }) => {
    let LocalFromSave = WithChecking({ inDataToInsert });

    if (LocalFromSave.KTF === false) {
        return await LocalFromSave;
    };

    return await SendMail({
        inDomainName, inDataToInsert, inpk: LocalFromSave.pk
    });
};

export { StartFunc };