import express from 'express';

var router = express.Router();

import { router as routerFrompostFuncs } from './routes/postFuncs/EntryFile.js';
import { router as routerFromgetFuncs } from './routes/getFuncs/EntryFile.js';
import { router as routerFromdeleteFuncs } from './routes/deleteFuncs/EntryFile.js';
import { router as routerFromupdateFuncs } from "./routes/putFuncs/EntryFile.js";

router.use('/', routerFrompostFuncs);
router.use('/', routerFromgetFuncs);
router.use('/', routerFromdeleteFuncs);
router.use('/', routerFromupdateFuncs);

export { router };