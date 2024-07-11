import express from 'express';

var router = express.Router();

// import { router as routerFromsrc } from './src/routes.js';
import { router as routerFrombin } from './CommonBin/routes.js';

// router.use('/src', routerFromsrc);
router.use('/bin', routerFrombin);

export { router };