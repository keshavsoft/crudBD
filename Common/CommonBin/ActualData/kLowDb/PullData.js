import fs from "fs";
import dirTree from "directory-tree";
import ConfigJson from '../../../../../bin/Config.json' assert {type: 'json'};

let StartFunc = () => {
    let LocalReturnData = { KTF: false }

    let LocalDataPath = `${ConfigJson.jsonConfig.DataPath}/${ConfigJson.jsonConfig.DataPk}`;
    const tree = dirTree(LocalDataPath);

    let LocalJsonData = LocalFuncReadFileData({ inFilesAsArrayData: tree.children });

    if (LocalJsonData.KTF === false) {
        return LocalReturnData;
    };

    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = LocalJsonData.JsonData;
    
    return LocalReturnData;
};

const LocalFuncReadFileData = ({ inFilesAsArrayData }) => {
    let LocalFilesAsArrayData = inFilesAsArrayData;
    let LocalReturnData = { KTF: false }
    let LocalArray = LocalFilesAsArrayData.map(LoopFile => {
        const data = fs.readFileSync(LoopFile.path, { encoding: 'utf8', flag: 'r' });
        let JsonParseData = JSON.parse(data);

        let LoopInsideObject = {};
        LoopInsideObject.FileName = LoopFile.name;
        LoopInsideObject.FileData = JsonParseData;
        return LoopInsideObject;

    });
    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = LocalArray
    return LocalReturnData;
};

export { StartFunc };
