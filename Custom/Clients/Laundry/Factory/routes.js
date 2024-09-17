import express from 'express';

var router = express.Router();

import { router as Inward } from './Inward/routes.js';

router.use('/Inward', Inward);

export { router };