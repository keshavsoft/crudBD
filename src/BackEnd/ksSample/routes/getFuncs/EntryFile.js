import express from 'express';

var router = express.Router();

import {
    GetFunc, GetDataOnlyFunc, GetFromModalUuidFunc, GetFromModalUuidAndTSFunc,
    GetFromModalFunc, GetIdFunc, GetBodyCheckFunc, GetRowCountFunc,
    GetColumnsSchemaFunc, GetFilterDataFunc, GetMaxWithKeyFunc, GetMaxRowFunc, GetUniqueWithKeyFunc, GetRawSqlFunc
} from '../../controllers/getFuncs/EntryFile.js';

router.get('/FromModal', GetFromModalFunc);
router.get('/ColumnsSchema', GetColumnsSchemaFunc);
router.get('/', GetFunc);
router.get('/FromModalUuid', GetFromModalUuidFunc);
router.get('/FromModalUuidAndTS', GetFromModalUuidAndTSFunc);
router.get('/DataOnly', GetDataOnlyFunc);
router.get('/BodyCheck', GetBodyCheckFunc);
router.get('/RowCount', GetRowCountFunc);
router.get('/MaxRow', GetMaxRowFunc);
router.get('/RawSql/:id', GetRawSqlFunc);

router.get('/FilterData/:Key/:Value', GetFilterDataFunc);
router.get('/Max/:Key', GetMaxWithKeyFunc);
router.get('/:id', GetIdFunc);
router.get('/Unique/:Key', GetUniqueWithKeyFunc);

// BodyCheck


export { router };