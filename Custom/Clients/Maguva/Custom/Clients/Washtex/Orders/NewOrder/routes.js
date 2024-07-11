import express from 'express';

var router = express.Router();

import { router as routerFromAddItem } from './AddItem/routes.js';
import { router as routerFromAddAddOn } from './AddAddOn/routes.js';
import { router as routerFromInsertNewOrder } from './InsertNewOrder/routes.js';

router.use('/AddItem', routerFromAddItem);
router.use('/AddAddOn', routerFromAddAddOn);
router.use('/InsertNewOrder', routerFromInsertNewOrder);

export { router };