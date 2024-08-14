import { StartFunc as StartFuncWriteTofile } from '../../kLowDb/WriteTofile/WithChecking/StartFunc.js';

let PostFunc = (inPostBody) => {
    return StartFuncWriteTofile({ inDataToInsert: inPostBody });
};

let PostFuncGenUuId = (inPostBody) => {
    return StartFuncWriteTofile({ inDataToInsert: inPostBody });
};

let PostWithCheckAndGenPkFunc = (inPostBody) => {
    return StartFuncWriteTofile({ inDataToInsert: inPostBody });
};
let PostSendMailGenUuIdFunc = (inPostBody) => {
    return StartFuncWriteTofile({ inDataToInsert: inPostBody });
};

export {
    PostFunc, PostFuncGenUuId, PostWithCheckAndGenPkFunc, PostSendMailGenUuIdFunc
};