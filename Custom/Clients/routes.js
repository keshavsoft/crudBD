import express from 'express';

var router = express.Router();

import { router as routerFromMaguva } from './Maguva/routes.js';
import { router as routerFromLaundry } from './Laundry/routes.js';
import { router as routerFromAdminLaundry } from './AdminLaundry/routes.js';

router.use('/Maguva', routerFromMaguva);
router.use('/Laundry', routerFromLaundry);
router.use('/AdminLaundry', routerFromAdminLaundry);

export { router };