import { StartFunc as StartFuncValidateToken } from "../../../../Token/jwt/Bin/ValidateToken.js";

let StartFunc = (req, res, next) => {
    let localClientToken = req.cookies.KSAToken;
    let localResult = StartFuncValidateToken({ inToken: localClientToken });

    if (localResult === false) {
        res.status(401).send({ message: 'Unauthorized' });
        return;
    };

    next();
};

export { StartFunc };