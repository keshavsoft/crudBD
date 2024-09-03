import { StartFunc as sendMailCC } from "./sendMailCC.js";

let StartFunc = async ({  inDomainName, inDataInserted, inpk }) => {
     if ("Email" in inDataToInsert) {
        return await sendMailCC({ CCEmail: inDataToInsert.Email, inDomainName, inDataInserted, inpk })
    }
};

export { StartFunc };