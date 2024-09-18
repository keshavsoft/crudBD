import express from 'express';

var router = express.Router();

import { router as routerFromScan } from './Scan/routes.js';
//import { router as routerFromQrCodes } from './QrCodes/routes.js';

router.use('/Scan', routerFromScan);
//router.use('/QrCodes', routerFromQrCodes);

export { router };