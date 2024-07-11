import fs from 'fs';
import path from 'path';
import ConfigJson from '../../Config.json' with {type: 'json'};

const StartFunc = ({ inRootFolder }) => {
    const root = `${inRootFolder}/HtmlFiles`;

    let FolderNamesArray = fs.readdirSync(root)
        .filter(filename => fs.statSync(root + '/' + filename).isDirectory())
        .map(filename => {
            return {
                name: filename,
                icon: "bi bi-plus-circle"
            }
        });

    let LocalSideBarItems = FolderNamesArray.map(LoopFolderName => {
        LoopFolderName.children = fs.readdirSync(`${root}/${LoopFolderName.name}`)
            .filter(filename => filename.endsWith('.html'))
            .map(filename => {
                return {
                    name: filename,
                    url: `${LoopFolderName.name}/${filename}`
                };
            });

        return LoopFolderName;
    });

    return LocalSideBarItems;
};

const StartFunc_19Jun2024 = ({ inFilesArray, inTablesArray }) => {
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