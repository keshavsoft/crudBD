import fs from "fs-extra";
import ConfigJson from '../../../../Config.json' assert {type: 'json'};

let StartFunc = ({ inTablesCollection }) => {
    let LocalTablesCollection = inTablesCollection;

    let LocalFirstLevelFolders = LocalTablesCollection.children.filter(element => {
        return "children" in element === false;
    });

    LocalFirstLevelFolders.forEach(LoopSecondLevel => {
        let LoopInsideFirstChar = LoopSecondLevel.path.replaceAll("\\", "/");
        let LoopInside = LoopInsideFirstChar.replace(ConfigJson.ToDataDetails.DataSchemaLocation, ConfigJson.ToDataDetails.DataPath);

        fs.writeFileSync(LoopInside, JSON.stringify([]));
    });
};

export { StartFunc };
