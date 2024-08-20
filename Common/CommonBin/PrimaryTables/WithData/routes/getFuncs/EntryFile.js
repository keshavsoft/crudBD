import express from 'express';
var router = express.Router();

import { GetFunc } from '../../controllers/getFuncs/EntryFile.js';
import { GetAllUniquesFunc } from '../../controllers/getFuncs/EntryFile.js';


router.get('/', GetFunc);
router.get('/AllUniques', GetAllUniquesFunc);

export { router };