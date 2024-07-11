import fs from "fs";
import path from 'path';
import dirTree from "directory-tree";
import ConfigJson from '../../../../../bin/Config.json' assert {type: 'json'};

let StartFunc = () => {
    let LocalDataPath = `${ConfigJson.jsonConfig.DataPath}/${ConfigJson.jsonConfig.DataPk}`;
    // const tree = dirTree(LocalDataPath);
    let LocalMap = FuncForJsonFilesInFolder({ inRootFolder: LocalDataPath });

    return LocalMap;
};

let StartFunc_15Jun2024 = () => {
    let LocalDataPath = `${ConfigJson.jsonConfig.DataPath}/${ConfigJson.jsonConfig.DataPk}`;
    const tree = dirTree(LocalDataPath);
    let LocalMap = tree.children.map(e => path.parse(e.name).name);

    return LocalMap;
};

const FuncForJsonFilesInFolder = ({ inRootFolder }) => {
    const root = inRootFolder;
    let files = {}
    let LocalFilesAray = [];
    let k1 = fs.readdirSync(root);

    LocalFilesAray = fs.readdirSync(root)
        .filter(filename => filename.endsWith('.json'));

    return LocalFilesAray;
};

export { StartFunc };
