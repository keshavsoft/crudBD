import express from 'express';

var router = express.Router();

// import { router as routerFromToday } from './Today/routes.js';
// import { router as routerFromAllDay } from './AllDay/routes.js';
import { router as routerFromNewOrder } from './NewOrder/routes.js';

// router.use('/Today', routerFromToday);
// router.use('/AllDay',routerFromAllDay);
router.use('/NewOrder',routerFromNewOrder);

export { router };