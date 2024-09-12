import express from 'express';

var router = express.Router();

import { StartFunc as MiddleWaresBinSecured } from "../../MiddleWares/MiddleWares.binSecured/EntryFile.js";

// import { router as routerpostFuncs } from './routes/postFuncs/EntryFile.js';
import { router as routergetFuncs } from './routes/getFuncs/EntryFile.js';

router.use('/backup', MiddleWaresBinSecured, routergetFuncs);

export { router };