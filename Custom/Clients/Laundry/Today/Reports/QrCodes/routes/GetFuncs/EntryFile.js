import express from 'express';

var router = express.Router();

import {
    GetAllFuncs, GetInBranchFuncs, GetToFactoryFuncs, GetFactoryScanFuncs, GetFactoryReturnFuncs
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/All/:inBranch', GetAllFuncs);
router.get('/InBranch/:inBranch', GetInBranchFuncs);
router.get('/ToFactory/:inBranch', GetToFactoryFuncs);
router.get('/FactoryScan/:inBranch', GetFactoryScanFuncs);
router.get('/FactoryReturn/:inBranch', GetFactoryReturnFuncs);

export { router };