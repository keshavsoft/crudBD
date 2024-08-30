import express from 'express';

var router = express.Router();

import {
    postFilterDataFromBodyFunc, postMaxRowFunc
} from '../../controllers/postFuncs/EntryFile.js';

router.post('/FilterDataFromBody', postFilterDataFromBodyFunc);
router.post('/MaxRow', postMaxRowFunc);


export { router };