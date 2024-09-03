import {
    PostFunc as PostFuncDal, PostFuncWithMail as PostFuncDalWithMail,
    PostFuncEndUser as PostFuncDalEndUser,
    PostFuncWithDataPk as PostFuncDalWithDataPk,
    PostAsIsFunc as PostAsIsFuncDal
} from '../../dals/postFuncs/EntryFile.js';

let PostFunc = ({ inUsername, inPassword }) => {
    return PostFuncDal({ inUsername, inPassword });
};

let PostAsIsFunc = ({ inInsertData }) => {
    return PostAsIsFuncDal({ inInsertData });
};

let PostFuncWithMail = ({ inUsername, inPassword, inMail }) => {
    return PostFuncDalWithMail({ inUsername, inPassword, inMail });
};

let PostFuncWithEndUser = async ({ inDomainName, inUsername, inPassword, inMail }) => {
    return await PostFuncDalEndUser({ inDomainName, inUsername, inPassword, inMail });
};

let PostFuncWithDataPk = ({ inUsername, inPassword, inMail, inDataPk }) => {
    return PostFuncDalWithDataPk({ inUsername, inPassword, inMail, inDataPk });
}

export { PostFunc, PostFuncWithMail, PostFuncWithEndUser, PostFuncWithDataPk, PostAsIsFunc };