import express from 'express';

var router = express.Router();

import { router as routerFromQrCodes } from './QrCodes/routes.js';
import { router as routerFromPOS } from './POS/routes.js';

router.use('/QrCodes', routerFromQrCodes);
router.use('/POS', routerFromPOS);

export { router };