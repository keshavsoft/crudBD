import express from 'express';

var router = express.Router();

import {
    postFilterDataFromBodyFunc
} from '../../controllers/postFuncs/EntryFile.js';

router.post('/FilterDataFromBody', postFilterDataFromBodyFunc);

export { router };