import ModalDataJson from '../../Data.json' assert { type: 'json' };

let PostFunc = (req, res, next) => {
    let LocalRequestBody = req.body;

    if (Object.keys(LocalRequestBody).length === 0) {
        res.status(404).json({
            KTF: false,
            KReason: "post requst body should contain : ",
            body: ModalDataJson
        });
        return;
    };

    next();
};

let MultiInsertWithCheck = (req, res, next) => {
    let LocalRequestBody = req.body;

    if (LocalRequestBody.length === 0) {
        res.status(404).json({
            KTF: false,
            KReason: "post requst body should contain : ",
            body: "Send Array Only "
        });
        return;
    };

    next();
};

export { PostFunc, MultiInsertWithCheck };