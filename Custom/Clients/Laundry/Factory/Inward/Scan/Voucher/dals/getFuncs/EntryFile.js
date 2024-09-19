import { StartFunc as GetVoucher } from '../../kLowDb/ReadFileList/GetVoucher.js';

let GetFunc = ({ inFactory }) => {
    return GetVoucher({ inFactory });
};

export {
    GetFunc
};