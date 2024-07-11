import ConfigJson from '../../../../Config.json' assert {type: 'json'};
import fs from "fs";

let StartFunc = () => {
    fs.writeFileSync(`${ConfigJson.ToDataDetails.DataPath}/${ConfigJson.ToDataDetails.DataPk}/ksSample.json`, JSON.stringify([]));
};

export { StartFunc };
