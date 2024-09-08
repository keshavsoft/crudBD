import { StartFunc as StartFuncWriteTofile } from '../../kLowDb/WriteTofile/WithChecking/StartFunc.js';
import { StartFunc as SendMail } from '../../kLowDb/SendMail/EntryFile.js';

let PostFunc = (inPostBody) => {
    return StartFuncWriteTofile({ inDataToInsert: inPostBody });
};

let PostImageUsingMulterFunc = (inPostBody) => {
    return StartFuncWriteTofile({ inDataToInsert: inPostBody });
};

let PostImageAndMailFunc = async ({ inDomainName, inDataToInsert, inpk }) => {
    return await SendMail({ inDomainName, inDataToInsert, inpk });
};

export {
    PostFunc, PostImageUsingMulterFunc, PostImageAndMailFunc
};