import fs from "fs-extra";

import ConfigJson from '../../../bin/Config.json' assert {type: 'json'};

let StartFunc = () => {
    const LocalFrom = "KCode/DataSchema";
    const LocalTo = "src/FrontEnd/assets/static/DataSchema";

    try {
        const CopyFrom = `${LocalFrom}/${ConfigJson.jsonConfig.DataPk}`;
        
        fs.cpSync(CopyFrom, LocalTo, {
            recursive: true,
        });
    } catch (error) {
        console.log(error.message);
        return false;
    };

    return true;
};

export { StartFunc };
