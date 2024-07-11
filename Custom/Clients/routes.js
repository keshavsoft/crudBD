import express from 'express';

var router = express.Router();

import { router as routerFromMaguva } from './Maguva/routes.js';

router.use('/Maguva', routerFromMaguva);

export { router };