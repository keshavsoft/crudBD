// import { StartFunc as StartFuncCreateToken } from "../../../../../../Token/jwt/JwtBin/CreateToken.js";
import { StartFunc as StartFuncCreateToken } from "../../../../../../Token/jwt/jwtAdmin/CreateToken.js";

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
    if (inSecret === 9848163021) {
        return true;
    };
};

export { PostFunc };