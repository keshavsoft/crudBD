import express from 'express';
var router = express.Router();

import { QrCodeFuncs } from "../../controllers/QrCode/EntryFile.js";

router.QrCode('/:inFactory', QrCodeFuncs);

export { router };