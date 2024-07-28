import { PostFunc as PostFuncRepo, PostFuncWithMail as PostFuncRepoWithMail ,PostFuncWithEndUser as PostFuncRepoWithEndUser, PostFuncWithDataPk as PostFuncRepoWithDataPk} from '../../repos/postFuncs/EntryFile.js';

let PostFunc = async (req, res) => {
    let LocalData = req.body;

    let LocalUsername = LocalData.UserName;
    let LocalPassword = LocalData.Password;

    let LocalFromRepo = await PostFuncRepo({ inUsername: LocalUsername, inPassword: LocalPassword });

    if (LocalFromRepo.KTF === false)  res.status(401).json(LocalFromRepo);

    res.json(LocalFromRepo.JsonData);

};

let PostFuncWithMail = async (req, res) => {
    let LocalData = req.body;

    let LocalUsername = LocalData.UserName;
    let LocalPassword = LocalData.Password;
    let LocalMail = LocalData.Mail

    let LocalFromRepo = await PostFuncRepoWithMail({ inUsername: LocalUsername, inPassword: LocalPassword, inMail: LocalMail });

    if (LocalFromRepo.KTF === false)  res.status(401).json(LocalFromRepo);

    res.json(LocalFromRepo);
};

let PostFuncEndUser = async (req, res) => {
    let LocalData = req.body;

    let LocalUsername = LocalData.UserName;
    let LocalPassword = LocalData.Password;
    let LocalMail = LocalData.Mail

    let LocalFromRepo = await PostFuncRepoWithEndUser({ inUsername: LocalUsername, inPassword: LocalPassword, inMail: LocalMail });

    if (LocalFromRepo.KTF === false)  return res.status(409).json(LocalFromRepo);

    res.json(LocalFromRepo);
};

let PostFuncWithDataPk = async (req, res) => {
    let LocalData = req.body;

    let LocalUsername = LocalData.UserName;
    let LocalPassword = LocalData.Password;
    let LocalMail = LocalData.Mail
    let LocalDataPk = LocalData.DataPk

    let LocalFromRepo = await PostFuncRepoWithDataPk({ inUsername: LocalUsername, inPassword: LocalPassword, inMail: LocalMail, inDataPk : LocalDataPk});

    if (LocalFromRepo.KTF === false)  res.status(401).json(LocalFromRepo);

    res.json(LocalFromRepo);
}

export { PostFunc, PostFuncWithMail, PostFuncEndUser, PostFuncWithDataPk};