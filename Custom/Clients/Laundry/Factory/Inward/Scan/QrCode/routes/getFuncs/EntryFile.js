import express from 'express';

var router = express.Router();

import {
    GetFunc, GetPendingFunc, GetScannedFunc
}
    from '../../controllers/getFuncs/EntryFile.js';

router.get('/:inFactory', GetFunc);
router.get('/Pending/:inFactory', GetPendingFunc);
// router.get('/Scanned/:inFactory', GetScannedFunc);

export { router };