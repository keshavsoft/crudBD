import express from 'express';

var router = express.Router();

import {
    GetFunc
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/:id/:inKey/:inValue', GetFunc);

export { router };