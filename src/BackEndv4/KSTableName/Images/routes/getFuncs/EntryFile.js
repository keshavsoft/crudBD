import express from 'express';

var router = express.Router();

import {
    GetFunc, GetRowDataFunc, GetAnyExtFunc
} from '../../controllers/getFuncs/EntryFile.js';

router.get('/', GetFunc);
router.get('/:id', GetRowDataFunc);
router.get('/AnyExt/:id', GetAnyExtFunc);

export { router };