let DeleteFunc = (req, res, next) => {
    let LocalRequestId = req.params.Id;

    if (LocalRequestId === "") {
        res.status(404).json({
            KTF: false,
            KReason: "Id Not Found in Params "
        });
        return;
    };

    next();
};

export { DeleteFunc };