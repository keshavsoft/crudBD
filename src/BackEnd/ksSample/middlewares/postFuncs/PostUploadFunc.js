let StartFunc = (req, res, next) => {
    let LocalRequestBody = req.body;

    if (Array.isArray(LocalRequestBody) === false) {
        res.status(404).json({
            KTF: false,
            KReason: "Send Array Only "
        });
        return;
    };

    next();
};

export { StartFunc };