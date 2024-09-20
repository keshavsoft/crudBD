import Configjson from '../../../../Config.json' assert { type: 'json' };
import tableNameJson from '../../../tableName.json' assert { type: 'json' };
import fs from "fs";

import path, { resolve } from 'path';

let StartFunc = ({ inKey, inResponse }) => {
  const localPath = path.parse(tableNameJson.tableName).name;
  const LocalFolderPath = `${Configjson.jsonConfig.DataPath}/${Configjson.jsonConfig.DataPk}/${localPath}`;
  let filenames = fs.readdirSync(LocalFolderPath);

  let LocalFilteredArray = filenames.filter(file => {
    return file.startsWith(inKey);
  });

  const userDataFilePath = `${Configjson.jsonConfig.DataPath}/${Configjson.jsonConfig.DataPk}/${localPath}/${LocalFilteredArray[0]}`;

  const LocalImageAbsolutePath = resolve(__basedir, userDataFilePath);

  inResponse.sendFile(LocalImageAbsolutePath);
};

export { StartFunc };
