import express from 'express';
var router = express.Router();

import { GetWithQrCodesFunc, GetReportFunc } from '../../controllers/getFuncs/EntryFile.js';

router.get('/WithQrCodes/:inBranch', GetWithQrCodesFunc);
router.get('/Reports/:inBranch', GetReportFunc);

export { router };