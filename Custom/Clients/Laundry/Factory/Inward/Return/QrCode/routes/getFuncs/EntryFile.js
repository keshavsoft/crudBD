import express from 'express';

var router = express.Router();

import {
    GetRowDataFunc
}
    from '../../controllers/getFuncs/EntryFile.js';

// router.get('/:inFactory', GetFunc);
// router.get('/Pending/:inFactory', GetPendingFunc);
// router.get('/Scanned/:inFactory', GetScannedFunc);
router.get('/RowData/:id/:inFactory', GetRowDataFunc);

export { router };