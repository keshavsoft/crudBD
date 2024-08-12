import express from 'express';

var router = express.Router();

import {
    PutFunc, PutToValueFunc, PutFromBodyFunc, PutToValueInArrayFunc
} from '../../controllers/putFuncs/EntryFile.js';

router.put('/:id', PutFunc);
router.put('/FromBody/:id', PutFromBodyFunc);
router.put("/toValue/:id/:KeyName", PutToValueFunc);
router.put("/toValueInArray/:id/:KeyName", PutToValueInArrayFunc);

export { router };