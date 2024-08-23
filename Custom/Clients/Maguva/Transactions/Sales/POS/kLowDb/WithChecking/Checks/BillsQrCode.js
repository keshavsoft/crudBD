import { LowSync } from 'lowdb';
import { JSONFileSync } from 'lowdb/node';
import Configjson from '../../../../../../Config.json' assert {type: 'json'};

let LocalFuncPullData = () => {

    let LocalFilePath = `${Configjson.jsonConfig.DataPath}/${Configjson.jsonConfig.DataPk}/BillsQrCode.json`;

    const defaultData = { error: "From local" }

    const db = new LowSync(new JSONFileSync(LocalFilePath), defaultData);
    db.read();
    return db.data;
};

const StartFunc = ({ inData }) => {
    let LocalinData = inData;
    let MaxRow = LocalinData[LocalinData.length - 1];

    let LocalReturnData = { KTF: false };

    let LocalDataNeeded = LocalFuncPullData();

    let LocalFindValue = LocalDataNeeded.find(element => element.BillPk == MaxRow.pk);

    if (LocalFindValue === undefined) {
        LocalReturnData.KReason = `No Last Record`;
        return LocalReturnData;
    };
    LocalReturnData.KTF = true;

    return LocalReturnData;

}

export { StartFunc };