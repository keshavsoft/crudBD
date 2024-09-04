import express from 'express';

var router = express.Router();

import {
    PostFunc, PostImageUsingMulterFunc
} from '../../controllers/postFuncs/EntryFile.js';

import {
    StartFunc as middlewareUsingMulter
} from '../../middlewares/postFuncs/UsingMulter.js';

// Post - it's check foreign and unique check and it's collect Max pk and generate UuId And pk also
router.post('/', PostFunc);
router.post('/ImageUsingMulter', middlewareUsingMulter.single("image"), PostImageUsingMulterFunc);

export { router };