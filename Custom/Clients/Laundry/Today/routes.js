import express from 'express';

var router = express.Router();

import { router as routerFromOrders } from './Orders/routes.js';

router.use('/Orders', routerFromOrders);

export { router };