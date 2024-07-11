import fs from "fs";

let StartFunc = ({ inTableData }) => {
    let LocalFirstLevelFolders = inTableData.children.filter(element => {
        return "children" in element === false;
    });

    LocalFirstLevelFolders.forEach(LoopFiles => {
        let LoopInsideFileData = fs.readFileSync(LoopFiles.path);
        LoopFiles.fileData = JSON.parse(LoopInsideFileData);
    });
};

export { StartFunc };
