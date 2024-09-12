import Configjson from '../../../Config.json' assert { type: 'json' };
import tableNameJson from '../../tableName.json' assert { type: 'json' };

import path, { resolve } from 'path';

import fs from 'fs';
import { fileURLToPath } from 'url';

let StartFunc = ({ inKey, inResponse }) => {
  // const __filename = fileURLToPath(import.meta.url);
  // const __dirname = path.dirname(__filename);
  // console.log("aaaaaaaaaaa : ", __basedir);

  const LocalFilePath = `${inKey}.png`;

  const localPath = path.parse(tableNameJson.tableName).name;

  const userDataFilePath = `${Configjson.jsonConfig.DataPath}/${Configjson.jsonConfig.DataPk}/${localPath}/${LocalFilePath}`;

  // const imagePath = path.join(userDataFilePath, LocalFilePath);

  const LocalImageAbsolutePath = resolve(__basedir, userDataFilePath);

  inResponse.sendFile(LocalImageAbsolutePath);
  // fs.readdir(
  //   path.resolve(__dirname, imagePath),
  //   (err, files) => {
  //     if (err) throw err;
  //     console.log(files[0]);

  //     res.sendFile(${ LocalFromDataSupply.RowPkAsFolderPath } / ${ files[0]});
  //   }
  // );


  // try {

  //   const FolderPath = `${Configjson.jsonConfig.DataPath}/${Configjson.jsonConfig.DataPk}/${localPath}`
  //   const LocalFilePath = `${inKey}.png`

  //   const imagePath = path.join(FolderPath, LocalFilePath);
  //   const __filename = fileURLToPath(import.meta.url);
  //   const __dirname = path.dirname(__filename);

  //   const filepath = path.join(__dirname, FolderPath);
  //   const absoluteFilePath = new URL(filepath);
  //   let LocalImagePath = absoluteFilePath.href.split("bin")[0] + imagePath
  //   const fileBuffer = await fs.promises.readFile(LocalImagePath);
  //   return fileBuffer;

  // } catch (error) {
  //   console.error('Error reading image file:', error);
  //   throw error; // Rethrow to handle in the route
  // }

};

let StartFunc1 = async ({ inKey }) => {

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
