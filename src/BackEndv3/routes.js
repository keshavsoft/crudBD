import express from 'express';

var router = express.Router();

import { router as RouterForKSTableName } from './KSTableName/routes.js';

router.use('/KSTableName', RouterForKSTableName);

export { router };