import fs from "fs";
import { StartFunc as InsertFunc } from "./StartFunc.js";
import ConfigJson from '../../../../Config.json' assert {type: 'json'};
import tableNameJson from '../../../../tableName.json' assert {type: 'json'};
import path from "path";

let StartFunc = ({ inDataToInsert }) => {
    let LocalDataToInsert = { ...inDataToInsert };
    delete LocalDataToInsert.image;

    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    let LocalFromSave = InsertFunc({ inDataToInsert: LocalDataToInsert });

    if (LocalFromSave.KTF === false) {
        return LocalFromSave;
    };

    if ("image" in inDataToInsert) {
        let LocalFromImage = LocalFuncReadImage({
            inImageData: inDataToInsert.image,
            inRowPk: LocalFromSave.pk
        });

        if (LocalFromImage === false) {
            LocalReturnData.KReason = "Image not saved!";
            return LocalReturnData;
        };
    };

    return LocalFromSave;
};

const LocalFuncReadImage = ({ inImageData, inRowPk }) => {
    var base64Data = inImageData;
    let base64Image = base64Data.split(';base64,').pop();

    try {
        fs.writeFileSync(`${ConfigJson.jsonConfig.DataPath}/${ConfigJson.jsonConfig.DataPk}/${path.parse(tableNameJson.tableName).name}/${inRowPk}.png`, base64Image, 'base64');
        return true;
    } catch (error) {
        return false;
    };
};

export { StartFunc };