import express from 'express';

var router = express.Router();

import { router as routerFromUsingJwt } from './UsingJwt/routes.js';

router.use('/UsingJwt', routerFromUsingJwt);

export { router };