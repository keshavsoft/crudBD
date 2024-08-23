import { StartFunc as StartFuncReadFile } from "./ReadFile.js";

const StartFunc = ({ inPk }) => {
    let Localpk = inPk;
    let LocalInData = StartFuncReadFile();
    let LocalFindData = LocalInData.filter(e => e.QrCode == Localpk);
  
    return LocalFindData.length;
};
export { StartFunc };