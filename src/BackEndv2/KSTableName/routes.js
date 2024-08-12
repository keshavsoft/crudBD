import express from 'express';

var router = express.Router();

import { router as Show } from './Show/routes.js';

router.use('/Show', Show);

export { router };