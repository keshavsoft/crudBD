import { StartFunc as StartFuncPullData } from '../../kLowDb/PullData.js';

let GetFunc = () => {
    return StartFuncPullData();
};

export { GetFunc };