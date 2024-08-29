import { StartFunc as StartFuncUpdateFile } from '../../forMongoDb/updateFile/update.js';

let PutFunc = ({ inDataToUpdate, inId }) => {
    return StartFuncUpdateFile({ inDataToUpdate, inId });
};

export { PutFunc };