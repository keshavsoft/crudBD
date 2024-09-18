import express from 'express';

var router = express.Router();

import { router as routerFromQrCodeFuncs } from './routes/QrCode/EntryFile.js';

router.use('/', routerFromQrCodeFuncs);

export { router };