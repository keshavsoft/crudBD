import express from 'express';

var router = express.Router();

import { router as routerPutFuncs } from './routes/putFuncs/EntryFile.js';

router.use('/', routerPutFuncs);

export { router };