import fs from "fs-extra";
import ConfigJson from '../../../Config.json' assert {type: 'json'};

let StartFunc = ({ inTablesCollection , inDataPk}) => {
    let LocalTablesCollection = inTablesCollection;
    let LocalDataPk = inDataPk;

    let LocalFirstLevelFolders = LocalTablesCollection.children.filter(element => {
        return "children" in element;
    });

    LocalFirstLevelFolders.forEach(LoopFirstLevel => {
        let LocalSecondLevelFiles = LoopFirstLevel.children.filter(element => {
            return "children" in element === false;
        });

        LocalSecondLevelFiles.forEach(LoopSecondLevel => {
            let LoopInsideFirstChar = LoopSecondLevel.path.replaceAll("\\", "/");
            let LoopInsideSecondChar = LoopInsideFirstChar.replaceAll("318", `${LocalDataPk}`);
            let LoopInside = LoopInsideSecondChar.replace(ConfigJson.ToDataDetails.DataSchemaLocation, ConfigJson.ToDataDetails.DataPath);

            
            fs.writeFileSync(LoopInside, JSON.stringify([]));
        });
    });
};

export { StartFunc };