import express from 'express';
var router = express.Router();

import { PostFunc, PostFuncWithMail as PostFuncWithMail, PostFuncEndUser as PostFuncForUser, PostFuncWithDataPk as PostFuncWithDataPk} from '../../controllers/postFuncs/EntryFile.js';
import { PostFunc as PostFuncMiddleWare } from "../../Middlewares/postFuncs/EntryFile.js";
import { PostFunc as PostFuncWithMailMiddleWare } from "../../Middlewares/postFuncs/1-EntryFile.js";
import { PostFunc as PostFuncWithDataPkMiddleWare } from "../../Middlewares/postFuncs/2-EntryFile.js";


router.post('/', PostFuncMiddleWare, PostFunc);
router.post("/withMail", PostFuncWithMailMiddleWare, PostFuncWithMail);
router.post("/endUser", PostFuncWithMailMiddleWare, PostFuncForUser);
router.post("/withDataPk", PostFuncWithDataPkMiddleWare, PostFuncWithDataPk);

export { router };