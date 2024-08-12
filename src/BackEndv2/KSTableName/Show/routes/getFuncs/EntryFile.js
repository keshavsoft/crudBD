import express from 'express';

var router = express.Router();

import {
    GetFunc, GetDataOnlyFunc
} from '../../controllers/getFuncs/EntryFile.js';
import { GetImagesFunc } from '../../dals/getFuncs/EntryFile.js';

router.get('/', GetFunc);
router.get('/DataOnly', GetDataOnlyFunc);
router.get('/Images', GetImagesFunc);

export { router };