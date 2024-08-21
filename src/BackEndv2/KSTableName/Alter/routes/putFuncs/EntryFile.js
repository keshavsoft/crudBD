import express from 'express';

var router = express.Router();

import {
    PutFunc, GetFunc
}
    from '../../controllers/putFuncs/EntryFile.js';



router.put('/:id', PutFunc);
router.put('/:id', GetFunc);


export { router };