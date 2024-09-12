import express from 'express';

var router = express.Router();

import {
    GetFunc, GetRowDataFunc
} from '../../controllers/getFuncs/EntryFile.js';

router.get('/', GetFunc);
router.get('/:id', GetRowDataFunc);

export { router };