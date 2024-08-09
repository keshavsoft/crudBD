import { StartFunc as StartFuncValidateToken } from "../../../../../Token/jwt/jwtAdmin/ValidateToken.js";

let StartFunc = (req, res, next) => {
    let localClientToken = req.cookies.KSAToken;
    console.log("localClientToken:", localClientToken);

    let localResult = StartFuncValidateToken({ inToken: localClientToken });
    console.log("localResult:", localResult);

    if (localResult === false) {
        res.status(401).send({ message: 'Unauthorized' });
        return;
    };

    next();
};

export { StartFunc };