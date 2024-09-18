import express from 'express';

var router = express.Router();

import { router as routerFromQrCode } from './QrCode/routes.js';

router.use('/QrCode', routerFromQrCode);

export { router };