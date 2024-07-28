const PostFunc = (req, res, next) => {
    const LocalRequestBody = req.body;
    const requiredFields = ["UserName", "Password", "Mail"];

    if (Object.keys(LocalRequestBody).length === 0) {
        res.status(200).json({
            KTF: false,
            KReason: "Post request body should contain:",
            body: {
                "UserName": "",
                "Password": ""
            }
        });
        return;
    }

    for (let field of requiredFields) {
        if (!LocalRequestBody.hasOwnProperty(field) || LocalRequestBody[field] === "") {
            let responseObj = {
                KTF: false,
                KReason: `Missing or empty field: ${field}`,
                body: {}
            };
            responseObj.body[field] = "";
            res.status(400).json(responseObj);
            return;
        }
    }

    next();
};

export { PostFunc };
