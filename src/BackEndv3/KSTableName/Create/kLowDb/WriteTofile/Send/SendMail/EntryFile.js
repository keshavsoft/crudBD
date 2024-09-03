import { StartFunc as sendMailCC } from "./sendMailCC.js";

let StartFunc = async ({ inDomainName, inDataInserted, inpk }) => {
    if ("Email" in inDataInserted) {
        return await sendMailCC({ CCEmail: inDataInserted.Email, inDomainName, inDataInserted, inpk })
    }
};

export { StartFunc };