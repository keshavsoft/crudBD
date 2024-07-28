import fs from "fs";

import { StartFunc as StartFuncReturnDbObject } from "../CommonFuncs/ReturnDbObject.js";

let StartFunc = ({ inUsername, inPassword, inMail }) => {

    let LocalUsername = inUsername;
    let LocalPassword = inPassword;
    let LocalMail = inMail;

    let LocalReturnData = { KTF: false }

    let LocalFromLowDb = StartFuncReturnDbObject();

    LocalFromLowDb.read();

    if ("error" in LocalFromLowDb.data){
        LocalReturnData.err = LocalFromLowDb.data.error;
        return LocalReturnData;
    }

    if (LocalFromLowDb.data.length !== 0) {
        let LocalFindData = LocalFromLowDb.data.find(e => e.UserName == LocalUsername)

        if (LocalFindData !== undefined) {
            LocalReturnData.KReason = "UserName Already Exists"
            return LocalReturnData
        }

        let LocalFindData1 = LocalFromLowDb.data.find(e => e.Mail == LocalMail)

        if (LocalFindData1 !== undefined) {
            LocalReturnData.KReason = "Email Already Exists"
            return LocalReturnData
        }

    };
    
    let LocalUuId = uuidv4();
    let LocalObject = {};
    LocalObject.UserName = LocalUsername;
    LocalObject.Password = LocalPassword;
    LocalObject.isMailValidated = false;
    LocalObject.Mail = LocalMail;
    LocalObject.UuId = LocalUuId;

    LocalFromLowDb.data.push(LocalObject);
    LocalFromLowDb.write();

    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = LocalFromLowDb.data;


    return LocalUuId;
};

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

export { StartFunc };
