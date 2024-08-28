import express from 'express';
var router = express.Router();

import {
    GetFunc, ValidateEmailFunc,
    GetCreateWithUserFunc
} from '../../controllers/getFuncs/EntryFile.js';
import { StartFunc as StartFuncMiddlewares } from '../../Middlewares/GetFuncs/EntryFile.js';

router.get('/', StartFuncMiddlewares, GetFunc);
router.get('/ValidateEmail/:Id', ValidateEmailFunc);
router.get('/CreateWithUser/:inUserName', GetCreateWithUserFunc);

export { router };