import { StartFunc as StartFuncWriteTofile } from '../../kLowDb/WriteTofile/WithChecking/StartFunc.js';
import { StartFunc as Send } from '../../kLowDb/WriteTofile/Send/EntryFile.js';
import { StartFunc as asIs } from '../../kLowDb/WriteTofile/asIs.js';

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

let PostSendMailFunc = async ({ inPostBody, inDomainName }) => {
    return await Send({ inDataToInsert: inPostBody, inDomainName });
};

let PostForTemplateFunc = async ({ inPostBody, inDomainName }) => {
    return await Send({ inDataToInsert: inPostBody, inDomainName });
};

let PostWithReferenceCheckFunc = async ({ inPostBody, inDomainName }) => {
    return await Send({ inDataToInsert: inPostBody, inDomainName });
};

let PostAsIsFunc = async ({ inPostBody, inDomainName }) => {
    return await asIs({ inDataToInsert: inPostBody, inDomainName });
};

export {
    PostFunc, PostFuncGenUuId, PostWithCheckAndGenPkFunc,
    PostSendMailGenUuIdFunc, PostSendMailFunc, PostForTemplateFunc,
    PostWithReferenceCheckFunc, PostAsIsFunc
};