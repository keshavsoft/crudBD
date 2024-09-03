import { StartFunc as StartFuncPullData } from '../../kLowDb/PullData.js';
import { StartFunc as StartFuncPullDataWithMail } from '../../kLowDb/PushData/WithEmail.js';
import { StartFunc as StartFuncPullDataEndUser } from "../../kLowDb/PushData/WithEmail.js";
import { StartFunc as StartFuncSendMail } from "../../../../../mail/sendmail.js";
import { StartFunc as StartFuncPullDataWithDataPk } from "../../kLowDb/PushData/WithDataPk.js";
import { StartFunc as AsIs } from '../../kLowDb/AsIs.js';

let PostFunc = ({ inUsername, inPassword }) => {
    return StartFuncPullData({ inUsername, inPassword });
};

let PostAsIsFunc = ({ inInsertData }) => {
    return AsIs({ inInsertData });
};

let PostFuncWithMail = ({ inUsername, inPassword, inMail }) => {
    return StartFuncPullDataWithMail({ inUsername, inPassword, inMail });
};

let PostFuncEndUser = async ({ inDomainName, inUsername, inPassword, inMail }) => {
    let LocalUuId = StartFuncPullDataEndUser({ inUsername, inPassword, inMail });

    let url = `http://${inDomainName}/Login/bin/Users/ValidateEmail/${LocalUuId}`;

    let LocalFromSendMail = await StartFuncSendMail({ inMail: inMail, inlink: url });

    return {
        Uuid: LocalUuId,
        messageId: LocalFromSendMail.messageId
    };
};

let PostFuncWithDataPk = ({ inUsername, inPassword, inMail, inDataPk }) => {
    return StartFuncPullDataWithDataPk({ inUsername, inPassword, inMail, inDataPk });
}

export { PostFunc, PostFuncWithMail, PostFuncEndUser, PostFuncWithDataPk, PostAsIsFunc };