import express from 'express';

var router = express.Router();

import { router as routerFromQrCodes } from './QrCodes/routes.js';

router.use('/QrCodes', routerFromQrCodes);

export { router };