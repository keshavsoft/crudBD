import { StartFunc as StartFuncPullData } from '../../kLowDb/GetData.js';

let GetFunc = () => {
    return StartFuncPullData();
};

export { GetFunc };