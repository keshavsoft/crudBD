import express from 'express';
var router = express.Router();

import { GetFunc, GetRemoveTokenFunc } from '../../controllers/getFuncs/EntryFile.js';

router.get('/', GetFunc);
router.get('/RemoveToken', GetRemoveTokenFunc);

export { router };