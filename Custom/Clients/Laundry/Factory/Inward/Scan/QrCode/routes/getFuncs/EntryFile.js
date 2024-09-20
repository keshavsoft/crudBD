import express from 'express';

var router = express.Router();

import {
    GetFunc, GetPendingFunc, GetScannedFunc, GetRowDataFunc, GetReturnsFunc, GetRowQrDataFunc
}
    from '../../controllers/getFuncs/EntryFile.js';

router.get('/:inFactory', GetFunc);
router.get('/Pending/:inFactory', GetPendingFunc);
router.get('/Scanned/:inFactory', GetScannedFunc);
router.get('/Returns/:inFactory', GetReturnsFunc);
router.get('/RowData/:id/:inFactory', GetRowDataFunc);
router.get('/RowQrData/:id', GetRowQrDataFunc);

export { router };