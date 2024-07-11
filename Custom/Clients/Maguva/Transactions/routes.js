import express from 'express';

var router = express.Router();

import { router as routerFromSales } from './Sales/routes.js';

router.use('/Sales', routerFromSales);

export { router };