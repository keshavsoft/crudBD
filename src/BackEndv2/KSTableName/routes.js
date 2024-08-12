import express from 'express';

var router = express.Router();

import { router as Show } from './Show/routes.js';
import { router as Create } from './Create/routes.js';

router.use('/Show', Show);
router.use('/Create', Create);

export { router };