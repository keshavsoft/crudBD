import express from 'express';

var router = express.Router();

import { router as routerFromAmountSplit } from './AmountSplit/routes.js';
import { router as routerFromOrdersWithQrs } from './OrdersWithQrs/routes.js';
import { router as OnlyOrders } from './OnlyOrders/routes.js';

router.use('/AmountSplit', routerFromAmountSplit);
router.use('/OrdersWithQrs', routerFromOrdersWithQrs);
router.use('/OnlyOrders', OnlyOrders);

export { router };