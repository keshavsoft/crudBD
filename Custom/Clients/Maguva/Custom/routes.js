import express from 'express';

var router = express.Router();

import { router as routerFromClientsFolder } from './Clients/routes.js';

router.use('/Clients', routerFromClientsFolder);

export { router };