import fs from "fs-extra";
import ConfigJson from '../../../Config.json' assert {type: 'json'};

let StartFunc = ({ inTablesCollection, inDataPk }) => {
    let LocalTablesCollection = inTablesCollection;
    let LocalDataPk = inDataPk;
    let LocalFirstLevelFolders = LocalTablesCollection.children.filter(element => {
        return "children" in element
    });

    LocalFirstLevelFolders.forEach(element => {
        let LoopInsideFirstChar = element.path.replaceAll("\\", "/");
        let LoopInsideSecondChar = LoopInsideFirstChar.replaceAll("318", `${LocalDataPk}`)
        let LoopInside = LoopInsideSecondChar.replace(ConfigJson.ToDataDetails.DataSchemaLocation, ConfigJson.ToDataDetails.DataPath);

        // let LoopInside = element.path.replace(ConfigJson.ToDataDetails.DataSchemaLocation, ConfigJson.ToDataDetails.DataPath);
        fs.mkdirSync(LoopInside);
    });
};

export { StartFunc };
