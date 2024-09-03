import express from 'express';

var router = express.Router();

import {
    GetFunc, GetReturnHtmlFunc
} from '../../controllers/GetFuncs/EntryFile.js';
import {
    GetFunc as middlewaresGetFunc
} from '../../middlewares/Alter/EntryFile.js';

router.get('/:id/:inKey/:inValue', middlewaresGetFunc, GetFunc);
router.get('/ReturnHtml/:id/:inKey/:inValue', GetReturnHtmlFunc);

export { router };