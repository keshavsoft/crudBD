import express from 'express';

var router = express.Router();

import {
    PostFunc, MultiInsertWithCheckFunc
} from '../../controllers/postFuncs/EntryFile.js';

import {
    MultiInsertWithCheck as MultiInsertWithCheckMiddleware
} from '../../middlewares/postFuncs/EntryFile.js';

router.post('/', PostFunc);
router.post('/MultiInsertWithCheck', MultiInsertWithCheckMiddleware, MultiInsertWithCheckFunc);

export { router };