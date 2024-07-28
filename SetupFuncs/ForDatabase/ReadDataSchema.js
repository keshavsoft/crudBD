import dirTree from "directory-tree";

let CommonFromFolderName = "DataSchema";
import ConfigJson from '../Config.json' assert {type: 'json'};

let StartFunc = () => {
    let LocalDataPk = ConfigJson.ToDataDetails.DataPk;
    let LocalDataPath = `KCode/${CommonFromFolderName}/${LocalDataPk}`;
    const tree = dirTree(LocalDataPath);
    return tree;
};

export { StartFunc };
