import { StartFunc as StartFuncUpdateData } from '../../kLowDb/UpdateData.js';

let PutFunc = ({ inDataToUpdate, inId }) => {
    return StartFuncUpdateData({ inDataToUpdate, inId });
};

export { PutFunc };