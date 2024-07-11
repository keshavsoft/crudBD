import express from 'express';

var router = express.Router();

import { router as routerFromWashtex } from './Washtex/routes.js';

router.use('/Washtex', routerFromWashtex);

export { router };