import express from 'express';

var router = express.Router();

import { router as routerFromMethods } from './routes/postFuncs/EntryFile.js';

router.use('/', routerFromMethods);

export { router };