import { PostFunc as PostFuncRepo } from '../../repos/postFuncs/EntryFile.js';
import { StartFunc as StartFuncCreateToken } from "../../../../../../Token/jwt/CreateToken.js";

let PostFunc = async (req, res) => {
    let LocalData = req.body;

    let LocalUsername = LocalData.UserName;
    let LocalPassword = LocalData.Password;

    let LocalFromRepo = await PostFuncRepo({ inUsername: LocalUsername, inPassword: LocalPassword });

    if ( LocalFromRepo.KTF) {
        let jVarLocalToken = StartFuncCreateToken({inObject : LocalUsername});
        res.json(jVarLocalToken);
        //console.log("jVarLocalToken",jVarLocalToken);
    }
    else{
        res.status(401);
        res.end();
    }
    
};

export { PostFunc };