import multer from 'multer';
import ConfigJson from '../../../Config.json' assert {type: 'json'};

import {
    PostFunc as PostFuncRepo
} from '../../repos/postFuncs/EntryFile.js';

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let LocalUrl = req.originalUrl;
        let LocalUrlArray = LocalUrl.split("/");
        // console.log("aaaaaaaaa : ", req.originalUrl,LocalUrlArray);
        cb(null, `${ConfigJson.JsonPath}/${LocalUrlArray[2]}`);
        // cb(null, "uploads");
    },
    filename: function (req, file, cb) {
        LocalFuncSaveData(req).then(PromiseData => {
            if (PromiseData === false) {
                cb(null, false);
            };

            req.KeshavSoft = {};
            req.KeshavSoft.insertedPk = PromiseData;

            cb(null, `${PromiseData}.jpg`);
        });
        // console.log(LocalId);

        // req.KeshavSoft = {};
        // req.KeshavSoft.InsertPk = LocalFromRepo.pk;

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
