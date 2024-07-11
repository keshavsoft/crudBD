import express from 'express';

var router = express.Router();

import { router as routerFromksSample } from './ksSample/routes.js';

router.use('/ksSample', routerFromksSample);

export { router };