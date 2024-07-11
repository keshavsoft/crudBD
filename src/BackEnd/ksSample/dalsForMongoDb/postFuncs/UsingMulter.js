import multer from 'multer';
import ConfigJson from '../../../Config.json' assert {type: 'json'};

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        
        let LocalUrl=req.originalUrl;
        let LocalUrlArray=LocalUrl.split("/");
        console.log("aaaaaaaaa : ", req.originalUrl,LocalUrlArray);
        cb(null, `${ConfigJson.JsonPath}/${LocalUrlArray[2]}`);
        // cb(null, "uploads");
    },
    filename: function (req, file, cb) {
        let LocalId = req.params.Id;
        console.log(LocalId);
        cb(null, `${LocalId}.jpg`);
    }
});

var upload = multer({ storage: storage });

export { upload };
