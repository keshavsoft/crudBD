import { StartFunc as StartFuncCreateToken } from "../../../../../../Token/jwt/CreateToken.js";

let PostFunc = (req, res) => {
    let LocalData = req.body;
    let LocalSecret = LocalData.Secret;

    let LocalFromValidate = LocalFuncValidate({ inSecret: LocalSecret });

    if (LocalFromValidate) {
        let jVarLocalToken = StartFuncCreateToken({ inObject: 984863021 });

        res.cookie('KSAToken', jVarLocalToken, { maxAge: 900000, httpOnly: false });
        res.end(jVarLocalToken);
    }
    else {
        res.status(401);
        res.end();
    };
};

const LocalFuncValidate = ({ inSecret }) => {
    if (inSecret === 984863021) {
        return true;
    };
};

export { PostFunc };