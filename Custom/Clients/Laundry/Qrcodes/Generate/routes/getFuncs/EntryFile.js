import express from 'express';
var router = express.Router();

import { GetIdFunc } from '../../controllers/getFuncs/EntryFile.js';

router.get('/:inBranch/:inId', GetIdFunc);

export { router };