import { StartFunc as StartFuncPullData } from '../../kLowDb/FindUser.js';

let PostFunc = ({ inUsername,inPassword }) => {
    return StartFuncPullData({ inUsername,inPassword });
};

export { PostFunc };