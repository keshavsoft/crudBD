import fs  from 'fs'
import Configjson from '../../../../../../../Config.json' assert { type: 'json' };

let StartFunc = () => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    LocalReturnData.UserDataFilePath = `${Configjson.jsonConfig.DataPath}/${Configjson.jsonConfig.DataPk}/Generate.json`;

    const db = fs.readFileSync(LocalReturnData.UserDataFilePath);
    const data = JSON.parse(db);
    return data;
};
export { StartFunc };
