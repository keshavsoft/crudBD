import { StartFunc as StartFuncWriteTofile } from '../../kLowDb/WriteTofile/WithChecking/StartFunc.js';
import { StartFunc as SendMail } from '../../kLowDb/SendMail/EntryFile.js';
import ConfigJson from '../../../../Config.json' assert {type: 'json'};
import tableNameJson from '../../../tableName.json' assert {type: 'json'};

import fs from "fs";
import path from 'path';

let PostFunc = (inPostBody) => {
    return StartFuncWriteTofile({ inDataToInsert: inPostBody });
};

export {
    PostFunc
};