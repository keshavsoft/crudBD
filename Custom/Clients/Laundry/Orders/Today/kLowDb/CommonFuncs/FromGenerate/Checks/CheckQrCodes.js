import { StartFunc as StartFuncCommonFuncs } from '../PullData/EntryFile.js';

const StartFunc = ({ inId }) => {
    let LocalId = inId;

    let LocalReturnData = { KTF: false };
    const dbForQrCodes = StartFuncCommonFuncs();

    let LocalRowNeeded = dbForQrCodes.inDb.data.find(e => e.PurchasePk == LocalId);

    if (LocalRowNeeded === undefined) {
        LocalReturnData.KTF = true;
        return LocalReturnData;
    };

    return LocalReturnData;
};
export { StartFunc };