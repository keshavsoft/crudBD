import { PostFunc as PostFuncRepo } from '../../repos/postFuncs/EntryFile.js';
// import { StartFunc as StartFuncCreateToken } from "../../../../../../Token/jwt/CreateToken.js";
import { StartFunc as StartFuncCreateToken } from "../../../../../../Token/jwt/JwtBin/CreateToken.js";

let PostFunc = async (req, res) => {
    let LocalData = req.body;

    let LocalUsername = LocalData.UserName;
    let LocalPassword = LocalData.Password;

    let LocalFromRepo = await PostFuncRepo({ inUsername: LocalUsername, inPassword: LocalPassword });

    if (LocalFromRepo.KTF) {
        let LocalDataPk = LocalFromRepo.DataPk;
        let jVarLocalToken = StartFuncCreateToken({ inObject: LocalDataPk });

        res.cookie('KSToken', jVarLocalToken, { maxAge: 900000, httpOnly: false });
        res.end(jVarLocalToken);
    }
    else {
        res.status(401);
        res.end();
    };
};

export { PostFunc };