import fs from "fs";
import path from "path";
import ConfigJson from '../../../../../bin/Config.json' assert {type: 'json'};

let StartFunc = () => {
    let LocalReturnData = { KTF: false }

    let LocalDataPath = `${ConfigJson.jsonConfig.DataPath}/${ConfigJson.jsonConfig.DataPk}`;

    let files = fs.readdirSync(LocalDataPath)
        .filter(filename => filename.endsWith('.json'))
        .map(filename => {
            const data = fs.readFileSync(`${LocalDataPath}/${filename}`, { encoding: 'utf8' });
            let JsonParseData = JSON.parse(data);

            let LoopInsideObject = {};
            LoopInsideObject.FileName = path.parse(filename).name;
            LoopInsideObject.FileData = JsonParseData;
            return LoopInsideObject;
        });

    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = files;

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
