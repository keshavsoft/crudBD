import { StartFunc as StartFuncPullData } from '../../kLowDb/PullData.js';

let GetFunc = () => {
    return StartFuncPullData();
};
let GetAllUniquesFunc = () => {
    return StartFuncPullData();
};
export { GetFunc, GetAllUniquesFunc };