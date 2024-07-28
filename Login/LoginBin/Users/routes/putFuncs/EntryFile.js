import express from 'express';
var router = express.Router();

import { PutFunc } from '../../controllers/putFuncs/EntryFile.js';

router.put('/:Id', PutFunc);

export { router };