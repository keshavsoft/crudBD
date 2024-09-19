import express from 'express';

var router = express.Router();

import { router as routergetFuncs } from './routes/getFuncs/EntryFile.js';
import { router as routerpostFuncs } from './routes/postFuncs/EntryFile.js';

router.use('/', routergetFuncs);
router.use('/', routerpostFuncs);

export { router };