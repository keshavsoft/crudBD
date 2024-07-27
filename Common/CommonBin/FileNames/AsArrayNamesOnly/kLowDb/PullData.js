import fs from "fs";
import path from 'path';
import ConfigJson from '../../../../../bin/Config.json' assert {type: 'json'};

let StartFunc = () => {
    let LocalDataPath = `${ConfigJson.jsonConfig.DataPath}/${ConfigJson.jsonConfig.DataPk}`;
    // const tree = dirTree(LocalDataPath);
    let LocalFilesWithExtension = FuncForJsonFilesInFolder({ inRootFolder: LocalDataPath });
    return LocalFilesWithExtension.map(e => path.parse(e).name);
};

const FuncForJsonFilesInFolder = ({ inRootFolder }) => {
    const root = inRootFolder;
    let LocalFilesAray = [];

    LocalFilesAray = fs.readdirSync(root)
        .filter(filename => filename.endsWith('.json'));

    return LocalFilesAray;
};

export { StartFunc };
