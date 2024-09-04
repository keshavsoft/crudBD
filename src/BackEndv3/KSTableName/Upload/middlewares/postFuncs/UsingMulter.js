import multer from 'multer';
import ConfigJson from '../../../../Config.json' assert {type: 'json'};

import {
    PostFunc as PostFuncRepo
} from '../../repos/postFuncs/EntryFile.js';

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let LocalUrl = req.originalUrl;
        let LocalUrlArray = LocalUrl.split("/");

        cb(null, `${ConfigJson.JsonPath}/${LocalUrlArray[2]}`);
    },
    filename: function (req, file, cb) {
        let LocalFile = file;

        LocalFuncSaveData(req).then(PromiseData => {
            if (PromiseData === false) {
                cb(null, false);
            };

            req.KeshavSoft = {};
            req.KeshavSoft.insertedPk = PromiseData.pk;

            switch (mimetype) {
                case "image/png":
                    cb(null, `${PromiseData.pk}.png`);
                    break;
                case "application/pdf":
                    cb(null, `${PromiseData.pk}.pdf`);
                    break;
                default:
                    cb(null, LocalFile.originalname );
                    break;
            };
        });

        console.log("aaaaaaaaaa");
    }
});

let LocalFuncSaveData = async (req) => {
    let LocalBody = req.body;
    // let LocalModalObject = new ClassSample({ ...LocalBody });

    let LocalFromRepo = await PostFuncRepo({ ...LocalBody });

    if (LocalFromRepo.KTF === false) {
        return await false;
    };

    return await LocalFromRepo;
};

var StartFunc = multer({ storage: storage });

export { StartFunc };
