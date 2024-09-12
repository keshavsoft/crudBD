import path, { resolve } from 'path'
import { fileURLToPath } from 'url';

import {
    GetFunc as GetFuncRepo,
    GetReturnHtmlFunc as GetReturnHtmlFuncRepo
} from "../../repos/GetFuncs/EntryFile.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CommonHtmlName = "chatNow.html";

let GetFunc = async (req, res) => {

    let LocalIfFromParam = req.params;
    let Localid = LocalIfFromParam.id;
    let LocalKey = LocalIfFromParam.inKey;
    let LocalValue = LocalIfFromParam.inValue;

    let LocalFromRepo = await GetFuncRepo({
        inId: Localid,
        inKey: LocalKey,
        inValue: LocalValue,
    });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    const LocalImageAbsolutePath = resolve(__dirname, CommonHtmlName);
    // console.log("LocalImageAbsolutePath : ", LocalImageAbsolutePath);

    res.sendFile(LocalImageAbsolutePath);
};

let GetReturnHtmlFunc = async (req, res) => {
    let LocalIfFromParam = req.params;
    let Localid = LocalIfFromParam.id;
    let LocalKey = LocalIfFromParam.inKey;
    let LocalValue = LocalIfFromParam.inValue;

    let LocalFromRepo = await GetReturnHtmlFuncRepo({
        inId: Localid,
        inKey: LocalKey,
        inValue: LocalValue,
    });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    const LocalImageAbsolutePath = resolve(__dirname, "checkMail.html");
    console.log("LocalImageAbsolutePath : ", LocalImageAbsolutePath);

    res.sendFile(LocalImageAbsolutePath);

    // http://join.keshavsoft.biz/binV3/StudentNames/Alter/63/isMailValidated/true

    // res.json(LocalFromRepo);
};

export { GetFunc, GetReturnHtmlFunc };
