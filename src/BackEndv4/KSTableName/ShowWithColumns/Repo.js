import {
    GetFunc as GetFuncDal,GetDataOnlyFunc as GetDataOnlyFuncDal,
     GetFromModalUuidFunc as GetFromModalUuidFuncDal,
    GetFromModalUuidAndTSFunc as GetFromModalUuidAndTSFuncDal,
    PostFunc as PostFuncDal,
    PostFromModalFunc as PostFromModalFuncDal, GetFromModalFunc as GetFromModalFuncDal,
    PostUploadFunc as PostUploadFuncDal, PostGetSelectColumnsFunc as PostGetSelectColumnsFuncDal,
    PostUploadFromModalFunc as PostUploadFromModalFuncDal, GetIdFunc as GetIdFuncDal
} from './Dal.js';

let GetFunc = () => {
    return GetFuncDal();
};

let GetDataOnlyFunc = () => {
    return GetDataOnlyFuncDal();
};
let GetIdFunc = ({inId}) => {
    return GetIdFuncDal({inId});
};

let GetFromModalFunc = () => {
    return GetFromModalFuncDal();
};

let GetFromModalUuidFunc = () => {
    return GetFromModalUuidFuncDal();
};

let GetFromModalUuidAndTSFunc = () => {
    return GetFromModalUuidAndTSFuncDal();
};

let PostFunc = ({ LocalKey1: LocalKeys }) => {
    return PostFuncDal({ LocalKey1: LocalKeys });
};

let PostFromModalFunc = ({ LocalBodyAsModal }) => {
    return PostFromModalFuncDal({ LocalBodyAsModal });
};

let PostUploadFunc = ({ LocalBodyAsModal }) => {
    return PostUploadFuncDal({ LocalBodyAsModal });
};

let PostUploadFromModalFunc = ({ LocalBodyAsModal }) => {
    return PostUploadFromModalFuncDal({ LocalBodyAsModal });
};

let PostGetSelectColumnsFunc = ({ LocalBodyAsModal }) => {
    return PostGetSelectColumnsFuncDal({ LocalBodyAsModal });
};

export {
    GetFunc,GetDataOnlyFunc, PostFunc, PostFromModalFunc, GetFromModalFunc,
    GetFromModalUuidFunc, GetFromModalUuidAndTSFunc,
    PostUploadFunc, PostGetSelectColumnsFunc,PostUploadFromModalFunc,GetIdFunc
};