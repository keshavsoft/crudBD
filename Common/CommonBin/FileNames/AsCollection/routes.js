import express from 'express';

var router = express.Router();

import { router as routerFromgetFuncs } from './routes/getFuncs/EntryFile.js';

router.use('/', routerFromgetFuncs);

export { router };