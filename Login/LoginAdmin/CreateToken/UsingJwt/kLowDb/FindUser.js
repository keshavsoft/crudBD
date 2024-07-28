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
        if (LocalFindData !== undefined) {
            LocalReturnData.KTF = true;
            LocalReturnData.DataPk = LocalFindData.DataPk;
        }
    };
    
    return LocalReturnData;
};


export { StartFunc };
