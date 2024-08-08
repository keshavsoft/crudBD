import jwt from 'jsonwebtoken';

let StartFunc = (req, res, next) => {
    let localClientToken = req.cookies.KSAToken;
    console.log("localClientToken:", localClientToken);

    let localResult = LocaFunValidate({ inToken: localClientToken });
    console.log("localResult:", localResult);

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

const LocaFunValidate = ({ inToken }) => {
    try {
        let jVarTokenInfo = jwt.verify(inToken, 984863021);

        return jVarTokenInfo;
    }
    catch (err) {
        return false;
    }
}

export { StartFunc };