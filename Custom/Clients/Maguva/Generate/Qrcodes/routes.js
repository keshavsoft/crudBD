import express from 'express';

var router = express.Router();

import { router as routerFromQrcodes } from './routes/getFuncs/EntryFile.js';

router.use('/', routerFromQrcodes);

export { router };