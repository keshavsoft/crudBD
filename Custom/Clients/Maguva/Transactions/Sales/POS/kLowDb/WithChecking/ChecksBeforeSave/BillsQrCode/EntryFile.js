import { StartFunc as StartFuncReadFile } from "./ReadFile.js";
import { StartFunc as StartFuncSalesReturns } from "../SalesReturns/EntryFile.js";

const StartFunc = ({ inPk }) => {
    let Localpk = inPk;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    let LocalInData = StartFuncReadFile();
    let LocalFilterSales = LocalInData.filter(e => e.pk == Localpk);

    if (LocalFilterSales.length > 0) {
        let LocalSalesReturns = StartFuncSalesReturns({ inPk: Localpk });

        if ((LocalSalesReturns === LocalFilterSales.length) === false) {
            LocalReturnData.KReason = LocalSalesReturns.KReason;
            return LocalReturnData;
        };

    };

    LocalReturnData.KTF = true
    return LocalReturnData;
};


export { StartFunc };