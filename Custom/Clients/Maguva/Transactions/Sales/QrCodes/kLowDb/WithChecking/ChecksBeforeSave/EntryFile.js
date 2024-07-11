import { StartFunc as StartFuncBillsQrcode } from "./BillsQrCode/EntryFile.js";
import { StartFunc as StartFuncGenerate } from "./Generate/EntryFile.js";

const StartFunc = ({ inPk }) => {
    let Localpk = inPk;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    let LocalFromGenerate = StartFuncGenerate({ inPk: Localpk });
    if (LocalFromGenerate.KTF === false) {
        return LocalFromGenerate;
    };

    let LocalFrombillsQrCode = StartFuncBillsQrcode({ inPk: Localpk });
    if (LocalFrombillsQrCode.KTF === false) {
        return LocalFrombillsQrCode;
    };
    LocalReturnData.KTF = true;
    return LocalReturnData;

};

export { StartFunc }