import fs from "fs";

let StartFunc = ({ inTableData }) => {
    let LocalFirstLevelFolders = inTableData.children.filter(element => {
        return "children" in element === false;
    });

    LocalFirstLevelFolders.forEach(element => {
        let LoopInsideFileData = fs.readFileSync(element.path);
        element.fileData = JSON.parse(LoopInsideFileData);
    });
};

export { StartFunc };
