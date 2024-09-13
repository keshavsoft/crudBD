import express from 'express';

var router = express.Router();

import {
    GetAllFuncs, GetInBranchFuncs, GetToFactoryFuncs
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/All/:inBranch', GetAllFuncs);
router.get('/InBranch/:inBranch', GetInBranchFuncs);
router.get('/ToFactory/:inBranch', GetToFactoryFuncs);

export { router };