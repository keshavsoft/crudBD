import Configjson from '../../../Config.json' assert { type: 'json' };
import tableNameJson from '../../tableName.json' assert { type: 'json' };
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

let StartFunc = async ({ inKey }) => {

  try {
    const userDataFilePath = `${Configjson.jsonConfig.DataPath}/${Configjson.jsonConfig.DataPk}/${tableNameJson.tableName}`;
    const localPath = path.parse(userDataFilePath).name;
    const FolderPath = `${Configjson.jsonConfig.DataPath}/${Configjson.jsonConfig.DataPk}/${localPath}`
    const LocalFilePath = `${inKey}.png`

    const imagePath = path.join(FolderPath, LocalFilePath);
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const filepath = path.join(__dirname, FolderPath);
    const absoluteFilePath = new URL(filepath);
    let LocalImagePath = absoluteFilePath.href.split("bin")[0] + imagePath
    const fileBuffer = await fs.promises.readFile(LocalImagePath);
    return fileBuffer;

  } catch (error) {
    console.error('Error reading image file:', error);
    throw error; // Rethrow to handle in the route
  }

};

export { StartFunc };
