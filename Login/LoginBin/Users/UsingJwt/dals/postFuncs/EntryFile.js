import { StartFunc as StartFuncPullData } from '../../kLowDb/PullData.js';

let PostFunc = ({ inUsername,inPassword }) => {
    return StartFuncPullData({ inUsername,inPassword });
};

export { PostFunc };