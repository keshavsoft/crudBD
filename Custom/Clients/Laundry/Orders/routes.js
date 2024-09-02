import express from 'express';

var router = express.Router();

import { router as routerFromToday } from './Today/routes.js';
import { router as routerFromAllDay } from './AllDay/routes.js';

router.use('/Today', routerFromToday);
router.use('/AllDay',routerFromAllDay);

export { router };