import { GetFunc as GetFuncDal } from '../../dals/getFuncs/EntryFile.js';
import { GetFunc as dalsForSequelize } from '../../dalsForSequelize/getFuncs/EntryFile.js';
import ConfigJson from '../../../../../../bin/Config.json' assert {type: 'json'};

let GetFunc = async () => {
    if (ConfigJson.isSequelize) {
        return await dalsForSequelize();
    };

    return GetFuncDal();
};

export { GetFunc };