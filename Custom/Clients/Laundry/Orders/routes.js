import express from 'express';

var router = express.Router();

import { router as routerFromToday } from './Today/routes.js';

router.use('/Today', routerFromToday);

export { router };