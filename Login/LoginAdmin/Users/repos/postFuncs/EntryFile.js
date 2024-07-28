import { PostFunc as PostFuncDal, PostFuncWithMail as PostFuncDalWithMail, PostFuncEndUser as PostFuncDalEndUser, PostFuncWithDataPk as PostFuncDalWithDataPk } from '../../dals/postFuncs/EntryFile.js';




let PostFunc = ({ inUsername, inPassword }) => {
    return PostFuncDal({ inUsername, inPassword });
};

let PostFuncWithMail = ({ inUsername, inPassword, inMail }) => {
    return PostFuncDalWithMail({ inUsername, inPassword, inMail });
};

let PostFuncWithEndUser = ({ inUsername, inPassword, inMail }) => {
    return PostFuncDalEndUser({ inUsername, inPassword, inMail });
};

let PostFuncWithDataPk = ({ inUsername, inPassword, inMail, inDataPk }) => {
    return PostFuncDalWithDataPk({ inUsername, inPassword, inMail, inDataPk });
}

export { PostFunc, PostFuncWithMail, PostFuncWithEndUser, PostFuncWithDataPk };