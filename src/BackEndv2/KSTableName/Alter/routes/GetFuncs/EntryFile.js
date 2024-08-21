import express from 'express';

var router = express.Router();

import {
    PutFunc
} from '../../controllers/putFuncs/EntryFile.js';

router.get('/:inKey/:inValue', PutFunc);

export { router };