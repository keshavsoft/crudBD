import express from 'express';

var router = express.Router();

// import { router as routerpostFuncs } from './routes/postFuncs/EntryFile.js';
import { router as routergetFuncs } from './routes/getFuncs/EntryFile.js';

router.use('/backup', routergetFuncs);

export { router };