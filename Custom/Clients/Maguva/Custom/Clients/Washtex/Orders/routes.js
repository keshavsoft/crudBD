import express from 'express';

var router = express.Router();

import { router as routerFromNewOrder } from './NewOrder/routes.js';

router.use('/NewOrder', routerFromNewOrder);

export { router };