import { StartFunc as StartFuncPullData } from '../../kLowDb/PullData.js';

let GetFunc = ({ inFolderName }) => {
    return StartFuncPullData({ inFolderName });
};

export { GetFunc };