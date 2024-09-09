import { LowSync } from 'lowdb';
import { JSONFileSync } from 'lowdb/node';
import Configjson from '../../../../../../Config.json' assert {type: 'json'};

let LocalFuncPullData = ({ inFileName }) => {
    let LocalFilePath = `${Configjson.jsonConfig.DataPath}/${Configjson.jsonConfig.DataPk}/${inFileName}.json`;

    const defaultData = { error: "From local" };

    const db = new LowSync(new JSONFileSync(LocalFilePath), defaultData);
    db.read();
    return db.data;
};

const StartFunc = ({ inFileName, inCheckWith, inKey }) => {
    let LocalinFileName = inFileName;

    let LocalDataNeeded = LocalFuncPullData({ inFileName: LocalinFileName });

    let LocalFindValue = LocalDataNeeded.filter(element => {
        return element[inKey] === inCheckWith;
    });

    if (LocalFindValue.length === 0) {
        return false;
    };

    return true;
};

export { StartFunc };