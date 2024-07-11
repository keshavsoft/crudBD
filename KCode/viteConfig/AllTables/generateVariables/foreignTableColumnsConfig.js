import ConfigJson from '../../../../bin/Config.json' assert {type: 'json'};
import _ from "lodash";

let LocalFuncReturnChildren = () => {
    return ConfigJson.jsonConfig.tableAndColumns.children;
};

const StartFunc = ({ inTableName }) => {
    let TableSchema = LocalFuncReturnChildren();

    let LoopinsideFind = TableSchema.find(element => {
        let k1 = _.findKey(element.fileData, o => {
            return o?.references?.model === inTableName;
        });

        return k1 === undefined === false;
    });

    return LoopinsideFind;
};

export { StartFunc };