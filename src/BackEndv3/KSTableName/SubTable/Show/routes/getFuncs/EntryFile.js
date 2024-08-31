import express from 'express';

var router = express.Router();

import {
     GetKeyNameFunc
} from '../../controllers/getFuncs/EntryFile.js';

router.get('/:id/:inKeyName', GetKeyNameFunc);

export { router };