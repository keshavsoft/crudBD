// import { JSONSyncPreset } from 'lowdb/node';
import { LowSync } from 'lowdb'
import { JSONFileSync } from 'lowdb/node'
import Configjson from '../../../Config.json' assert { type: 'json' };

let StartFunc = ({ inId }) => {
    let LocalId = inId;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    LocalReturnData.UserDataFilePath = `${Configjson.JsonPath}/{{ksSample}}.json`;

    const defaultData = { error: "From KLowDb" }

    const db = new LowSync(new JSONFileSync(LocalReturnData.UserDataFilePath), defaultData);
    db.read();
    console.log("LocalId : ", LocalId);
    let LocalRowNeeded = db.data.find(e => e.UuId === LocalId);

    LocalReturnData.JsonData = LocalRowNeeded;
    LocalReturnData.KTF = true;

    return LocalReturnData;
};

export { StartFunc };