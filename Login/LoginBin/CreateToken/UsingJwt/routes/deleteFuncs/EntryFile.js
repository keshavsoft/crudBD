import express from 'express';
var router = express.Router();

import { DeleteFunc } from '../../controllers/deleteFuncs/EntryFile.js';

router.delete('/:Id', DeleteFunc);

export { router };