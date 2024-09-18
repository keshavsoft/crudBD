import express from 'express';

var router = express.Router();

import { router as routerpostFuncs } from './routes/postFuncs/EntryFile.js';

router.use('/', routerpostFuncs);

export { router };