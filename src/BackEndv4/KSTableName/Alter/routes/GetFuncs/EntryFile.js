import express from 'express';

var router = express.Router();

import {
    GetFunc, GetReturnHtmlFunc
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/:id/:inKey/:inValue', GetFunc);
router.get('/ReturnHtml/:id/:inKey/:inValue', GetReturnHtmlFunc);

export { router };