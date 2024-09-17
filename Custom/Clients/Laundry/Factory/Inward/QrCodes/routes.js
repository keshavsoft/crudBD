import express from 'express';

var router = express.Router();

import { router as routerFromGetFuncs } from './routes/GetFuncs/EntryFile.js';

router.use('/', routerFromGetFuncs);

export { router };