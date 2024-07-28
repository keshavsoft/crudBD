import express from 'express';

var router = express.Router();

import { router as routerFrombin } from './LoginBin/routes.js';
import { router as routerLoginAdmin } from './LoginAdmin/routes.js';

router.use('/bin', routerFrombin);
router.use('/LoginAdmin', routerLoginAdmin);

export { router };