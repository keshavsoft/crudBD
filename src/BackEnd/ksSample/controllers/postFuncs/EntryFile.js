import {
    PostFunc as PostFuncRepo,
    PostFromModalFunc as PostFromModalFuncRepo,
    PostUploadFunc as PostUploadFuncRepo,
    PostGetSelectColumnsFunc as PostGetSelectColumnsFuncRepo,
    PostUploadFromModalFunc as PostUploadFromModalFuncRepo,
    PostFilterFunc as PostFilterFuncRepo,
    PostWithKeysCheckFunc as PostWithKeysCheckFuncRepo,
    PostFuncGenUuId as PostFuncGenUuIdRepo,
    PostWithCheckAndGenPkFunc as PostWithCheckAndGenPkFuncRepo,
    MultiInsertWithCheckFunc as MultiInsertWithCheckFuncRepo,
    PostCustomPkFunc as PostCustomPkFuncRepo
} from '../../repos/postFuncs/EntryFile.js';

import {
    ColumnsPullFunc
} from '../../DataColumns.js';

import { ClassSample } from '../../ModalClass.js';

let PostFunc = async (req, res) => {
    let LocalBody = req.body;
    // let LocalModalObject = new ClassSample({ ...LocalBody });

    let LocalFromRepo = await PostFuncRepo({ ...LocalBody });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.json(LocalFromRepo);
};

let PostCustomPkFunc = async (req, res) => {
    let LocalBody = req.body;
    // let LocalModalObject = new ClassSample({ ...LocalBody });

    let LocalFromRepo = await PostCustomPkFuncRepo({ ...LocalBody });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.json(LocalFromRepo);
};

let PostFuncGenUuId = async (req, res) => {
    let LocalBody = req.body;
    // let LocalModalObject = new ClassSample({ ...LocalBody });

    let LocalFromRepo = await PostFuncGenUuIdRepo({ ...LocalBody });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.json(LocalFromRepo);
};

let PostFilterFunc = async (req, res) => {
    let LocalBody = req.body;
    let LocalFilterCondition = LocalBody.FilterCondition;

    let LocalFromRepo = await PostFilterFuncRepo({ inFilterCondition: LocalFilterCondition });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.json(LocalFromRepo);
};

let PostUploadImageFunc = async (req, res) => {
    let LocalBody = req.body;
    let LocalModalObject = new ClassSample({ ...LocalBody });

    let LocalFromRepo = await PostFuncRepo({ ...LocalModalObject });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.json(LocalFromRepo);
};

let PostFromModalFunc = (req, res) => {
    let LocalBodyData = req.body;
    let LocalBodyAsModal = ColumnsPullFunc()(LocalBodyData);

    let LocalFromRepo = PostFromModalFuncRepo({ LocalBodyAsModal });
    res.json(LocalFromRepo);
};

let PostUploadFunc = (req, res) => {
    let LocalBodyData = req.body;
    let LocalModalObject = LocalFromArray({ inArray: LocalBodyData });

    let LocalFromRepo = PostUploadFuncRepo({ LocalBodyAsModal: LocalModalObject });
    res.json(LocalFromRepo);
};

let LocalFromArray = ({ inArray }) => {
    let LocalNewAray = [];

    LocalNewAray = inArray.map(element => {
        return new ClassSample({ ...element });
    });

    return LocalNewAray;
};

let PostUploadFromModalFunc = async (req, res) => {
    let LocalBodyData = req.body;

    let LocalFromRepo = await PostUploadFromModalFuncRepo({ inArrayFromRequest: LocalBodyData });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.json(LocalFromRepo);
};

let MultiInsertWithCheckFunc = async (req, res) => {
    let LocalBodyData = req.body;

    let LocalFromRepo = await MultiInsertWithCheckFuncRepo({ inArrayFromRequest: LocalBodyData });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.json(LocalFromRepo);
};

let PostGetSelectColumnsFunc = (req, res) => {
    let LocalBodyData = req.body;
    let LocalBodyAsModal = ColumnsPullFunc()(LocalBodyData);

    let LocalFromRepo = PostGetSelectColumnsFuncRepo({ LocalBodyAsModal });
    res.json(LocalFromRepo);
};

let PostWithKeysCheckFunc = async (req, res) => {
    let LocalBody = req.body;
    let LocalFromRepo = await PostWithKeysCheckFuncRepo({ ...LocalBody });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.json(LocalFromRepo);
};

let PostWithCheckAndGenPkFunc = async (req, res) => {
    let LocalBody = req.body;
    let LocalFromRepo = await PostWithCheckAndGenPkFuncRepo({ ...LocalBody });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.json(LocalFromRepo);
};

export {
    PostFunc, PostFromModalFunc,
    PostUploadFunc, PostGetSelectColumnsFunc,
    PostUploadFromModalFunc, PostUploadImageFunc,
    PostFilterFunc, PostWithKeysCheckFunc, PostFuncGenUuId,
    PostWithCheckAndGenPkFunc,MultiInsertWithCheckFunc,PostCustomPkFunc
};