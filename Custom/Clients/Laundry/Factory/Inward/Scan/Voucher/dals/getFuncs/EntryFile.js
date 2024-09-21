import { StartFunc as GetVoucher } from '../../kLowDb/ReadFileList/GetVoucher.js';
import { StartFunc as GetVoucherQrStatus } from '../../kLowDb/ReadFileList/GetVoucherQrStatus.js';

let GetFunc = ({ inFactory }) => {
    return GetVoucher({ inFactory });
};

let GetQrStatusFunc = ({ inFactory }) => {
    return GetVoucherQrStatus({ inFactory });
};

export {
    GetFunc, GetQrStatusFunc
};