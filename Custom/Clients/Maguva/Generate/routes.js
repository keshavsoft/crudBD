import express from 'express';

var router = express.Router();

import { router as routerFromQrcodes } from './Qrcodes/routes.js';

router.use('/Qrcodes', routerFromQrcodes);

export { router };