import fs from "fs";

import { StartFunc as StartFuncReturnDbObject } from "./CommonFuncs/ReturnDbObject.js";

let StartFunc = ({ inUsername, inPassword }) => {

    let LocalUsername = inUsername;
    let LocalPassword = inPassword;

    let LocalReturnData = { KTF: false }

    let LocalFromLowDb = StartFuncReturnDbObject();
    LocalFromLowDb.read();

    if (LocalFromLowDb.data.length !== 0) {
        let LocalFindData = LocalFromLowDb.data.find(e => e.UserName == LocalUsername && e.Password == LocalPassword)

        console.log("LocalData:", LocalFindData);

        if (LocalFindData !== undefined) {
            return LocalReturnData
        }
    };
    
    let LocalUuId = uuidv4();
    let LocalObject = {};
    LocalObject.UserName = LocalUsername;
    LocalObject.Password = LocalPassword;
    LocalObject.UuId = LocalUuId;

    LocalFromLowDb.data.push(LocalObject);
    LocalFromLowDb.write;

    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = LocalFromLowDb.data;

    return LocalReturnData;
};

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

export { StartFunc };
