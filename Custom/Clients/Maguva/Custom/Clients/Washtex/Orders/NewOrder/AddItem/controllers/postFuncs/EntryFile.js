import { postFunc as postFuncFromRepo } from '../../repos/postFuncs/EntryFile.js';

let postFunc = async (req, res) => {
    let LocalBody = req.body;

    let LocalParams = req.params;
    let LocalBranchName = LocalParams.inBranchName;

    let LocalFromRepo = await postFuncFromRepo({
        inBranchName: LocalBranchName,
        inPostBody: LocalBody
    });

    res.json(LocalFromRepo);
};

export { postFunc };