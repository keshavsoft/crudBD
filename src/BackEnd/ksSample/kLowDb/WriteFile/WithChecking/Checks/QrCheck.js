import { LowSync } from 'lowdb';
import { JSONFileSync } from 'lowdb/node';
import Configjson from '../../../../../Config.json' assert {type: 'json'};

let LocalFuncPullData = ({ inFileName }) => {

    let LocalFilePath = `${Configjson.jsonConfig.DataPath}/${Configjson.jsonConfig.DataPk}/${inFileName}.json`;

    const defaultData = { error: "From local" }

    const db = new LowSync(new JSONFileSync(LocalFilePath), defaultData);
    db.read();
    return db.data;
};

const StartFunc = ({ inFileName, NeededKey, inSearchKey }) => {
    let LocalinFileName = inFileName;
    let LocalSearchKey = inSearchKey;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    let LocalDataNeeded = LocalFuncPullData({ inFileName: LocalinFileName });

    let LocalFindValue = LocalDataNeeded.filter(element => element[LocalSearchKey] == NeededKey);

    if (LocalFindValue.length > 0) {
        LocalReturnData.KTF = true;

        return LocalReturnData;
    };

    LocalReturnData.KReason = `${NeededKey} not found in ${LocalinFileName}.${LocalSearchKey}`;
    return LocalReturnData;

}

export { StartFunc };