import { StartFunc as StartFuncValidateToken } from "../../../../../../Token/jwt/ValidateToken.js";

let GetFunc = async (req, res) => {
    let localToken = req.params.inToken;
    let jVarTokenInfo = StartFuncValidateToken({inToken : localToken});

    if (jVarTokenInfo.name){
        res.status(400);
    }

    res.json(jVarTokenInfo);
};

export { GetFunc };