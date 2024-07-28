import { StartFunc as StartFuncPullData } from '../../kLowDb/DeleteData.js';

let DeleteFunc = ({InId}) => {
    return StartFuncPullData({InId});
};

export { DeleteFunc };