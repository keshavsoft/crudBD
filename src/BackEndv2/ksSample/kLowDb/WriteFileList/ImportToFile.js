import { LowSync } from 'lowdb'
import { JSONFileSync } from 'lowdb/node'
import Configjson from '../../../Config.json' assert { type: 'json' };
import tableNameJson from '../../tableName.json' assert { type: 'json' };

let StartFunc = ({ LocalBodyAsModal }) => {
    let LocalinDataToInsert = LocalBodyAsModal;
    let LocaltableName = tableNameJson.tableName;

    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    LocalReturnData.UserDataFilePath = `${Configjson.JsonPath}/${LocaltableName}`;

    const defaultData = { error: "From KLowDb" }

    const db = new LowSync(new JSONFileSync(LocalReturnData.UserDataFilePath), defaultData);
    db.read();

    let LocalArrayAfterUuid = LocalFuncForArray({ inDataToInsert: LocalinDataToInsert });

    db.data.push(...LocalArrayAfterUuid);
    db.write();

    LocalReturnData = LocalArrayAfterUuid.length;

    return LocalReturnData;
};

const LocalFuncForArray = ({ inDataToInsert }) => {
    let LocalReturnData = inDataToInsert.map(element => {
        let LocalReturnData = LocalFunc({ inDataToInsert: element });

        return LocalReturnData
    });

    return LocalReturnData;
};

const LocalFunc = ({ inDataToInsert }) => {

    let LocalReturnData = { ...inDataToInsert, UuId: uuidv4(), DateTime: Timestamp() };
    return LocalReturnData
};

const Timestamp = () => {
    let currentDate = new Date();
    let formattedDate = currentDate.toISOString();

    return formattedDate;
};

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

export { StartFunc };
