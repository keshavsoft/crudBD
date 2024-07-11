// import { StartFunc as StartFuncWriteTofile } from '../../kLowDb/WriteTofile/AsIs.js';
import { StartFunc as StartFuncWithChecking } from '../../kLowDb/WithChecking/StartFunc.js';

let postFunc = ({ inPostBody }) => {
    let LocalFromLowDb = StartFuncWithChecking({
        inDataToInsert: inPostBody
    });



    return LocalFromLowDb;
};

export { postFunc };