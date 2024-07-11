import express from 'express';
var router = express.Router();

import { GetIdFunc ,GetIdWithTableFunc } from '../../controllers/getFuncs/EntryFile.js';

router.get('/:id', GetIdFunc);
router.get('/Table/:inTable/:id', GetIdWithTableFunc);

export { router };