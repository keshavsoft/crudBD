import { QrCodeFunc as QrCodeFuncDal } from '../../dals/QrCode/EntryFile.js';

let QrCodeFunc = ({ inFactory, inPostBody }) => {
    return QrCodeFuncDal({ inFactory, inPostBody });
};

export { QrCodeFunc };