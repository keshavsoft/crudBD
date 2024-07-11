import fs from "fs-extra";

import ConfigJson from '../Config.json' assert {type: 'json'};

let StartFunc = () => {
    const LocalFrom = "KCode/DataSchema";
    const LocalTo = "publicSrc/assets/static/DataSchema";

    try {
        fs.cpSync(`${LocalFrom}/${ConfigJson.ToDataDetails.DataPk}`, `${LocalTo}/${ConfigJson.ToDataDetails.DataPk}`, {
            recursive: true,
        });
    } catch (error) {
        console.log(error.message);
        return false;
    };

    return true;
};

export { StartFunc };
