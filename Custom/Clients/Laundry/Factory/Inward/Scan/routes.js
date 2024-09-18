import express from 'express';

var router = express.Router();

import { router as routerFromQrCode } from './QrCode/routes.js';
import { router as routerFromVoucher } from './Voucher/routes.js';

router.use('/QrCode', routerFromQrCode);
router.use('/Voucher', routerFromVoucher);

export { router };