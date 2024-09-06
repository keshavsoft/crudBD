import express from 'express';

var router = express.Router();

import { router as routerFromGenerate } from './Generate/routes.js';
import { router as routerFromEntryScan } from './EntryScan/routes.js';

router.use('/Generate', routerFromGenerate);
router.use('/EntryScan', routerFromEntryScan);

export { router };