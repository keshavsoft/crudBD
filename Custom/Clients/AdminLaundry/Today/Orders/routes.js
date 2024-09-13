import express from 'express';

var router = express.Router();

import { router as routerFrompostFuncs } from './routes/postFuncs/EntryFile.js';
import { router as routerFromGetFuncs } from './routes/getFuncs/EntryFile.js';

router.use('/', routerFrompostFuncs);
router.use('/', routerFromGetFuncs);

export { router };