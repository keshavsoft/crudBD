import { StartFunc as StartFuncValidateToken } from "../../Token/jwt/ValidateToken.js";

let StartFunc = (req, res, next) => {
    let localClientToken = req.cookies.KSToken;
    let localResult = StartFuncValidateToken({ inToken: localClientToken });

    if (localResult === false) {
        res.status(401).send({ message: 'Unauthorized' });
        return;
    };

    req.locals = {};
    req.locals.KeshavSoft = {}
    // req.locals.KeshavSoft.UserUuid = localResult;
    req.locals.KeshavSoft.DataPk = localResult;

    next();
};

export { StartFunc };