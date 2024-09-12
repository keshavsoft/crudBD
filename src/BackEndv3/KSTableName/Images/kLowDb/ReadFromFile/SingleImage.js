import Configjson from '../../../../Config.json' assert { type: 'json' };
import tableNameJson from '../../../tableName.json' assert { type: 'json' };

import path, { resolve } from 'path';

let StartFunc = ({ inKey, inResponse }) => {
  const LocalFilePath = `${inKey}.png`;

  const localPath = path.parse(tableNameJson.tableName).name;

  const userDataFilePath = `${Configjson.jsonConfig.DataPath}/${Configjson.jsonConfig.DataPk}/${localPath}/${LocalFilePath}`;

  const LocalImageAbsolutePath = resolve(__basedir, userDataFilePath);

  inResponse.sendFile(LocalImageAbsolutePath);
};

export { StartFunc };
