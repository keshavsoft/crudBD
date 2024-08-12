import express from 'express';

var router = express.Router();

import { DeleteFunc } from '../../controllers/DeleteFuncs/EntryFile.js';

import { DeleteFunc as DeleteFuncmiddleware } from '../../middlewares/DeleteFuncs/DeleteFunc.js';

router.delete('/:Id', DeleteFuncmiddleware, DeleteFunc);

export { router };