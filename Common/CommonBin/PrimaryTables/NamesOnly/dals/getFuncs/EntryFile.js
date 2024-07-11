import { StartFunc as StartFuncPullData } from '../../kLowDb/getForeignTables.js';

let GetFunc = () => {
    return StartFuncPullData();
};

export { GetFunc };