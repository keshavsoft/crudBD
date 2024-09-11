import express from 'express';

var router = express.Router();

import { router as routerGetFuncs } from './routes/GetFuncs/EntryFile.js';

router.use('/', routerGetFuncs);

export { router };