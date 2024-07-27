import express from 'express';

var router = express.Router();

import { router as routerFromAssArray } from './AsArray/routes.js';
import { router as routerFromAsCollection } from './AsCollection/routes.js';
import { router as routerFromAsArrayNamesOnly } from './AsArrayNamesOnly/routes.js';

router.use('/AsArray', routerFromAssArray);
router.use('/AsCollection', routerFromAsCollection);
router.use('/AsArrayNamesOnly', routerFromAsArrayNamesOnly);

export { router };