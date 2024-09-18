import multer from 'multer';
import ConfigJson from '../../../../Config.json' assert {type: 'json'};

import {
    PostFunc as PostFuncRepo
} from '../../repos/postFuncs/EntryFile.js';

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let LocalUrl = req.originalUrl;
        let LocalUrlArray = LocalUrl.split("/");

        cb(null, `${ConfigJson.JsonPath}/${LocalUrlArray[2]}`);
    },
    filename: function (req, file, cb) {
        let LocalFile = file;
        req.KeshavSoft = {};
        let LocalUuid = uuidv4();

        switch (LocalFile.mimetype) {
            case "image/png":
                req.KeshavSoft.Uuid = `${LocalUuid}.png`
                cb(null, `${LocalUuid}.png`);
                break;
            case "application/pdf":
                req.KeshavSoft.Uuid = `${LocalUuid}.pdf`;
                cb(null, `${LocalUuid}.pdf`);
                break;
            default:
                cb(null, LocalFile.originalname);
                break;
        };
    }
});

let LocalFuncSaveData = async (req) => {
    let LocalBody = req.body;
    let LocalReturnData = {};
    LocalReturnData.KTF = false;

    // let LocalModalObject = new ClassSample({ ...LocalBody });

    let LocalFromRepo = await PostFuncRepo({ ...LocalBody });

    if (LocalFromRepo.KTF === false) {
        req.KeshavSoft.ErrorInfo = LocalFromRepo.ErrorInfo;

        return await LocalReturnData;
    };
    LocalReturnData.KTF = true;

    return await LocalReturnData;
};

var StartFunc = multer({ storage: storage });

export { StartFunc };
