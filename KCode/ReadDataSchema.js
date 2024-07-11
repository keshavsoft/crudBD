import dirTree from "directory-tree";
import fs from "fs";

let CommonFromFolderName = "DataSchema";
import ConfigJson from './Config.json' assert {type: 'json'};

let StartFunc = () => {
    let LocalDataPk = ConfigJson.ToDataDetails.DataPk;
    let LocalDataPath = `KCode/${CommonFromFolderName}/${LocalDataPk}`;
    const tree = dirTree(LocalDataPath, { extensions: /\.json/ });

    tree.children.forEach(element => {
        let LoopInsideFileData = fs.readFileSync(element.path, "utf8");

        element.fileData = JSON.parse(LoopInsideFileData);
    });

    return tree;
};

export { StartFunc };
