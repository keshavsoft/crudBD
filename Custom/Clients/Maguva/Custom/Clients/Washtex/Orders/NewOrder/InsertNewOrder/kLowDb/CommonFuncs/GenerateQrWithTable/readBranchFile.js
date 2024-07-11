import { LowSync } from 'lowdb'
import { JSONFileSync } from 'lowdb/node'
import Configjson from '../../../../../../../../../bin/Config.json' assert { type: 'json' };
import fileNameJson from '../../../../../../../../../bin/Transactions/FolderName.json' assert { type: 'json' };

let StartFunc = ({inTable}) => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    LocalReturnData.UserDataFilePath = `${Configjson.jsonConfig.DataPath}/${Configjson.jsonConfig.DataPk}/${fileNameJson.folderName}/${inTable}.json`;

    const defaultData = { error: "From KLowDb" }

    const db = new LowSync(new JSONFileSync(LocalReturnData.UserDataFilePath), defaultData);

    return db;
};

export { StartFunc };
