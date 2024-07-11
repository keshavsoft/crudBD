import express from 'express';

var router = express.Router();

import { router as routergetFuncs } from './routes/getFuncs/EntryFile.js';
import { router as routerpostFuncs } from './routes/postFuncs/EntryFile.js';
import { router as routerDeleteFuncs } from './routes/DeleteFuncs/EntryFile.js';
import { router as routerPutFuncs } from './routes/putFuncs/EntryFile.js';

router.use('/', routergetFuncs);
router.use('/', routerpostFuncs);
router.use('/', routerDeleteFuncs);
router.use('/', routerPutFuncs);

export { router };