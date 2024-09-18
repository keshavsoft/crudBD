import { QrCodeFunc as QrCodeFuncRepo } from '../../repos/QrCode/EntryFile.js';

let QrCodeFunc = (req, res) => {
    let LocalParams = req.params;
    let LocalFactory = LocalParams.inFactory;
    let LocalBody = req.body;

    let LocalFromRepo = QrCodeFuncRepo({ inFactory: LocalFactory, inPostBody: LocalBody });
    res.json(LocalFromRepo);

};

export { QrCodeFunc };