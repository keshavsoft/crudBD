import express from 'express';

var router = express.Router();

import { router as routerForRoute } from './src/route.js';

router.use('/src', routerForRoute);

export { router };