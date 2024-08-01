import Configjson from '../../../Config.json' assert { type: 'json' };
import tableNameJson from '../../tableName.json' assert { type: 'json' };
import path from 'path';
import fs from 'fs';

let StartFunc = async ({ inKey }) => {
  try {
    const userDataFilePath = `${Configjson.jsonConfig.DataPath}/${Configjson.jsonConfig.DataPk}/${tableNameJson.tableName}`;
    const localPath = path.parse(userDataFilePath).name;
    const FolderPath = `${Configjson.jsonConfig.DataPath}/${Configjson.jsonConfig.DataPk}/${localPath}`
    const imagePath = `${FolderPath}/${inKey}.png`

    const imageBuffer = await fs.readFile(imagePath);

    return `${FolderPath}/${imageBuffer}`;

  } catch (err) {
    console.error('Error:', err);

  }
};

export { StartFunc };
