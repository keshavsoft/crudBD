import express from 'express';
var router = express.Router();

import { GetWithQrCodesFunc } from '../../controllers/getFuncs/EntryFile.js';

router.get('/WithQrCodes/:inBranch', GetWithQrCodesFunc);

export { router };