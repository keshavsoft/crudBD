import express from 'express';

var router = express.Router();

import { router as Orders } from './Orders/routes.js';

router.use('/Orders', Orders);

export { router };