import express from 'express';

var router = express.Router();

import { router as routerFromGenrated } from './Genrated/routes.js';
import { router as routerFromInBranch } from './InBranch/routes.js';
import { router as routerFromToFactory } from './ToFactory/routes.js';

router.use('/Genrated', routerFromGenrated);
router.use('/InBranch', routerFromInBranch);
router.use('/ToFactory', routerFromToFactory);

export { router };