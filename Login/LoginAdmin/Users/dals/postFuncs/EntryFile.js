import { StartFunc as StartFuncPullData } from '../../kLowDb/PullData.js';
import { StartFunc as StartFuncPullDataWithMail } from '../../kLowDb/PushData/WithEmail.js';
import { StartFunc as StartFuncPullDataEndUser} from "../../kLowDb/PushData/WithEmail.js";
import { StartFunc as StartFuncSendMail } from "../../../../../mail/sendmail.js";
import { StartFunc as StartFuncPullDataWithDataPk } from "../../kLowDb/PushData/WithDataPk.js";

let PostFunc = ({ inUsername, inPassword }) => {
    return StartFuncPullData({ inUsername, inPassword });
};

let PostFuncWithMail = ({ inUsername, inPassword, inMail }) => {
    return StartFuncPullDataWithMail({ inUsername, inPassword, inMail });
};

let PostFuncEndUser = ({ inUsername, inPassword, inMail }) => {
    let LocalUuId = StartFuncPullDataEndUser({ inUsername, inPassword, inMail });

    

    let url = `http://localhost:7016/Login/bin/Users/ValidateEmail/${LocalUuId}`;
    StartFuncSendMail({inMail:inMail, inlink:url});

    return LocalUuId;

};

let PostFuncWithDataPk = ({ inUsername, inPassword, inMail, inDataPk }) => {
    return StartFuncPullDataWithDataPk({ inUsername, inPassword, inMail, inDataPk });
}

export { PostFunc, PostFuncWithMail ,PostFuncEndUser, PostFuncWithDataPk};