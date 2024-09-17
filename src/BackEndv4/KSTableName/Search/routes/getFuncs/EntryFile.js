import express from 'express';

var router = express.Router();

import {
    GetFunc
} from '../../controllers/getFuncs/EntryFile.js';

router.get('/', GetFunc);
router.get('/AsObject', GetFunc);
router.get('/AsArray', GetFunc);

export { router };