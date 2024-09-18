import { StartFunc as All } from '../../kLowDb/ReadFileList/All.js';

let GetFunc = ({ inFactory }) => {
    return All({ inFactory });

};

export { GetFunc };