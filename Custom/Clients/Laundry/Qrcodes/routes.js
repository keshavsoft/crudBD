import express from 'express';

var router = express.Router();

import { router as routerFromGenerate } from './Generate/routes.js';

router.use('/Generate', routerFromGenerate);

export { router };