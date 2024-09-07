import express from 'express';

var router = express.Router();

import {
    GetFunc, GetImageUsingMulterFunc, GetImageAndMailFunc
} from '../../controllers/getFuncs/EntryFile.js';

import {
    StartFunc as middlewareUsingMulter
} from '../../middlewares/GetFuncs/UsingMulter.js';


// Post - it's check foreign and unique check and it's collect Max pk and generate UuId And pk also
router.post('/', GetFunc);
router.post('/ImageUsingMulter', middlewareUsingMulter.single("image"), GetImageUsingMulterFunc);
router.post('/ImageAndMail', middlewareUsingMulter.single("image"), GetImageAndMailFunc);

export { router };