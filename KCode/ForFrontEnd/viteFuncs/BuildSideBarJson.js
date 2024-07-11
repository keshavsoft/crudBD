import path from 'path';
import ConfigJson from '../../Config.json' with {type: 'json'};

const StartFunc = ({ inFilesArray, inTablesArray }) => {
    let LocalReturnArray = [];

    LocalReturnArray = inTablesArray.map(LoopTable => {
        LoopTable.nameWithOutExtension = path.parse(LoopTable.name).name;
        LoopTable.DataPk = ConfigJson.ToDataDetails.DataPk

        LoopTable.children = Object.keys(inFilesArray).map(element => {
            return {
                name: element,
                icon: "bi bi-person",
                url: `${path.parse(LoopTable.name).name}-${element}.html`,
                tableName: path.parse(LoopTable.name).name,
                filePath: inFilesArray[element]
            };
        });

        return LoopTable;
    });

    return LocalReturnArray;
};

export { StartFunc }