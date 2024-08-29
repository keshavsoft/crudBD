import { StartFunc as ReadFromFile } from '../../kLowDb/ReadFromFile/getFunc.js';
import { StartFunc as getModal } from '../../kLowDb/ReadFromFile/getModal.js';
import { StartFunc as getBodyCheck } from '../../kLowDb/ReadFromFile/getBodyCheck.js';
import { StartFunc as getimagesOnly } from '../../kLowDb/ReadFromFile/getimagesOnly.js';
import { StartFunc as withJoins } from '../../kLowDb/ReadFromFile/withJoins.js';
import { StartFunc as getRowFunc } from '../../kLowDb/ReadFromFile/getRowFunc.js';

let postFilterDataFromBodyFunc = ({ inFindKey, inFindValue }) => {
    let LocalFromLowDb = ReadFromFile({ inFindKey, inFindValue });

    if (LocalFromLowDb.KTF === false) {
        return false;
    };

    return LocalFromLowDb;
};

export {
    postFilterDataFromBodyFunc
};