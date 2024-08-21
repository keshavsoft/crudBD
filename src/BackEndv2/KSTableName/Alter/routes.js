import express from 'express';

var router = express.Router();

import { router as routerPutFuncs } from './routes/putFuncs/EntryFile.js';
import { router as routerGetFuncs } from './routes/GetFuncs/EntryFile.js';

router.use('/', routerPutFuncs);
router.use('/', routerGetFuncs);

export { router };