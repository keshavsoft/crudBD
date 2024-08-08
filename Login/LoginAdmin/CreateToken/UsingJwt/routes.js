import express from 'express';

var router = express.Router();

import { router as routerFrompostFuncs } from './routes/postFuncs/EntryFile.js';

router.use('/', routerFrompostFuncs);

export { router };