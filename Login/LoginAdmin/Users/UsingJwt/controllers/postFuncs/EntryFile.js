import { PostFunc as PostFuncRepo } from '../../repos/postFuncs/EntryFile.js';

let PostFunc = async (req, res) => {
    let LocalData = req.body;

    let LocalUsername = LocalData.Username;
    let LocalPassword = LocalData.Password;

    let LocalFromRepo = await PostFuncRepo({ inUsername: LocalUsername, inPassword: LocalPassword });
    res.json(LocalFromRepo);
};

export { PostFunc };