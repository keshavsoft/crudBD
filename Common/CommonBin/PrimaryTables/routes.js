import express from 'express';

var router = express.Router();

import { router as routerFromWithData } from './WithData/routes.js';
import { router as routerFromNamesOnly } from './NamesOnly/routes.js';

router.use('/WithData', routerFromWithData);
router.use('/NamesOnly', routerFromNamesOnly);

export { router };