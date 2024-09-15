import express from 'express';

var router = express.Router();

import { router as Show } from './Show/routes.js';
import { router as Create } from './Create/routes.js';
import { router as Alter } from './Alter/routes.js';
import { router as Delete } from './Delete/routes.js';
import { router as Upload } from './Upload/routes.js';
import { router as Mail } from './Mail/routes.js';
import { router as Images } from './Images/routes.js';
import { router as Search } from './Search/routes.js';

import { router as SubTable } from './SubTable/routes.js';

router.use('/Show', Show);
router.use('/Create', Create);
router.use('/Alter', Alter);
router.use('/Delete', Delete);
router.use('/Upload', Upload);
router.use('/Mail', Mail);
router.use('/Images', Images);
router.use('/Search', Search);

router.use('/SubTable', SubTable);

export { router };