import { StartFunc as StartFuncPullData } from "../PullData/EntryFile.js";
import Configjson from '../../../../Config.json' assert { type: 'json' };
import ModalDataJson from '../../Data.json' assert { type: 'json' };
import tableNameJson from '../../../tableName.json' assert { type: 'json' };

let StartFunc = async () => {
  let LocaltableName = tableNameJson.tableName;
  let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

  let LocalStartFuncPullData = StartFuncPullData();

  if (LocalStartFuncPullData === false) {
    LocalReturnData.KReason = LocalStartFuncPullData.KReason;
    return LocalReturnData;
  };

  const db = LocalStartFuncPullData.inDb;
  db.read();

  LocalReturnData.UserDataFilePath = `${Configjson.JsonPath}/${LocaltableName}`;

    LocalReturnData.JsonData = LocalFuncToModal({ inArray: db.data });
    LocalReturnData.KTF = true;

    return LocalReturnData;
};

let LocalFuncToModal = ({ inArray }) => {
    let LocalNewArray = inArray.map(element => {
        return {
            ...ModalDataJson,
            ...element
        };
    });

    return LocalNewArray;
};

export { StartFunc };