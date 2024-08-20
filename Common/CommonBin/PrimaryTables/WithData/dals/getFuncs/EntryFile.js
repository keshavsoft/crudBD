import { StartFunc as StartFuncPullData } from '../../kLowDb/PullData.js';
import { StartFunc as StartFuncAllUniques } from '../../kLowDb/AllUniques.js';

let GetFunc = () => {
    return StartFuncPullData();
};
let GetAllUniquesFunc = () => {
    return StartFuncAllUniques();
};
export { GetFunc, GetAllUniquesFunc };