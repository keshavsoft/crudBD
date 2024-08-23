import express from 'express';

var router = express.Router();

import { router as routerDeleteFuncs } from './routes/DeleteFuncs/EntryFile.js';

router.use('/', routerDeleteFuncs);

export { router };