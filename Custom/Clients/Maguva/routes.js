import express from 'express';

var router = express.Router();

import { router as routerFromTransactions } from './Transactions/routes.js';
import { router as routerFromGenerate } from './Generate/routes.js';

router.use('/Transactions', routerFromTransactions);
router.use('/Generate', routerFromGenerate);

export { router };