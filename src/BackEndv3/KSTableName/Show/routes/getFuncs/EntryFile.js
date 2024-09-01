import express from 'express';

var router = express.Router();

import {
    GetFunc, GetDataOnlyFunc, GetImagesFunc, GetBodyCheckFunc, GetFromModalFunc,
    GetFromModalUuidFunc, GetWithJoinsFunc, GetDataSortByColumnFunc, GetRowDataFunc,
    GetMaxRowFunc, GetLastRowFunc, GetFilterFunc
} from '../../controllers/getFuncs/EntryFile.js';

router.get('/', GetFunc);
router.get('/DataOnly', GetDataOnlyFunc);
router.get('/Images', GetImagesFunc);
router.get('/BodyCheck', GetBodyCheckFunc);
router.get('/FromModal', GetFromModalFunc);
router.get('/FromModalUuid', GetFromModalUuidFunc);
router.get('/WithJoins', GetWithJoinsFunc);
router.get('/MaxRow', GetMaxRowFunc);
router.get('/LastRow', GetLastRowFunc);
router.get('/MinRow', GetMaxRowFunc);
router.get('/FirstRow', GetLastRowFunc);
router.get('/Filter/:FilterKey/:FilterValue', GetFilterFunc);
router.get('/Sort/:Column', GetDataSortByColumnFunc);
router.get('/:id', GetRowDataFunc);

export { router };