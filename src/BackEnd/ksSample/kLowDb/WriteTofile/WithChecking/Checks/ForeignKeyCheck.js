import { LowSync } from 'lowdb';
import { JSONFileSync } from 'lowdb/node';
import Configjson from '../../../../../Config.json' assert {type: 'json'};

let LocalFuncPullData = ({ inFileName }) => {
    // let LocalFilePath = `${Configjson.jsonConfig.DataPath}/${Configjson.jsonConfig.DataPk}/${LocalFolderName}/${inFileName}.json`;
    let LocalFilePath = `${Configjson.jsonConfig.DataPath}/${Configjson.jsonConfig.DataPk}/${inFileName}.json`;

    const defaultData = { error: "From local" }

    const db = new LowSync(new JSONFileSync(LocalFilePath), defaultData);
    db.read();
    return db.data;
};

const StartFunc = ({ inFileName, NeededKey, inKey }) => {
    let LocalinFileName = inFileName;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    let LocalDataNeeded = LocalFuncPullData({ inFileName: LocalinFileName });

    let LocalFindValue = LocalDataNeeded.filter(element => {
        return element[inKey] == NeededKey;
    });

    if (LocalFindValue.length === 0) {
        return LocalReturnData;
    };
    LocalReturnData.KTF = true;
    return LocalReturnData;

}

export { StartFunc };