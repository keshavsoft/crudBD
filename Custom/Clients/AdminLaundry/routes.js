import express from 'express';

var router = express.Router();

//import { router as routerFromQrcodes } from './Today/routes.js';
//import { router as routerFromOrders } from './Orders/routes.js';
import { router as routerToday } from './Today/routes.js';

//router.use('/Qrcodes', routerFromQrcodes);
//router.use('/Orders', routerFromOrders);
router.use('/Today', routerToday);

export { router };