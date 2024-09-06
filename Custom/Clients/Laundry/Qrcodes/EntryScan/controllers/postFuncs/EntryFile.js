import { PostFunc as PostFuncRepo } from '../../repos/postFuncs/EntryFile.js';

let PostFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch;
    let LocalBody = req.body;

    let LocalFromRepo = await PostFuncRepo({ inBranch: LocalBranch, inPostBody: LocalBody });
    res.status(200).json(LocalFromRepo);

};


export { PostFunc };