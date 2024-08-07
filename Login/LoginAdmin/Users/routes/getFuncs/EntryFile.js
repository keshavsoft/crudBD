import express from 'express';
var router = express.Router();

import { GetFunc, ValidateEmailFunc } from '../../controllers/getFuncs/EntryFile.js';

router.get('/', GetFunc);
router.get('/ValidateEmail/:Id', ValidateEmailFunc);

export { router };