import express from 'express';

var router = express.Router();

import {
    PostFunc, PostFromModalFunc,PostCustomPkFunc,
    PostUploadFunc, PostGetSelectColumnsFunc, PostUploadFromModalFunc,
    PostUploadImageFunc, PostFilterFunc, PostWithKeysCheckFunc, PostFuncGenUuId, PostWithCheckAndGenPkFunc, MultiInsertWithCheckFunc
} from '../../controllers/postFuncs/EntryFile.js';

import {
    PostFunc as PostFuncmiddleware,
    MultiInsertWithCheck as MultiInsertWithCheckMiddleware

} from '../../middlewares/postFuncs/EntryFile.js';
import { PostFunc as PostFuncPostUploadFunc } from '../../middlewares/postFuncs/PostUploadFunc.js';

import { upload as uploadFromMulter } from '../../dals/postFuncs/UsingMulter.js';

router.post('/BodyCheck', PostFuncmiddleware, PostFunc);
router.post('/GetSelectColumns', PostGetSelectColumnsFunc);
router.post('/', PostFunc);
router.post('/CustomPk', PostCustomPkFunc);
router.post('/GenUuId', PostFuncGenUuId);
router.post('/WithKeysCheck', PostWithKeysCheckFunc);
router.post('/WithCheckAndGenPk', PostWithCheckAndGenPkFunc);
router.post('/MultiInsertWithCheck', MultiInsertWithCheckMiddleware, MultiInsertWithCheckFunc);

router.post('/Filter', PostFilterFunc);
router.post('/FromModal', PostFromModalFunc);
router.post('/Upload', PostFuncPostUploadFunc, PostUploadFunc);
router.post('/UploadFromModal', PostUploadFromModalFunc);
router.post('/UploadImage/:Id', uploadFromMulter.single("image"), PostUploadImageFunc);
router.post('/UploadMultipleImages/:Id', uploadFromMulter.array("images", 4), PostUploadImageFunc);

export { router };