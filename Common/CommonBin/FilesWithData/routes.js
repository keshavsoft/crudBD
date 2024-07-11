import express from 'express';

var router = express.Router();

import { router as routerFromActualData } from './ActualData/routes.js';
import { router as routerFromSummary } from './Summary/routes.js';

router.use('/ActualData', routerFromActualData);
router.use('/Summary', routerFromSummary);

export { router };