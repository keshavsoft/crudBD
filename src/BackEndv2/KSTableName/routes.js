import express from 'express';

var router = express.Router();

import { router as Show } from './Show/routes.js';
import { router as Create } from './Create/routes.js';
import { router as Alter } from './Alter/routes.js';
import { router as Delete } from './Delete/routes.js';

router.use('/Show', Show);
router.use('/Create', Create);
router.use('/Alter', Alter);
router.use('/Delete', Delete);

export { router };