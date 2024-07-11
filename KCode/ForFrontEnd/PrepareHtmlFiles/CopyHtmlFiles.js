import fs from "fs";
const destinationPath = "publicSrc";

const StartFunc = ({ inSideBarArray }) => {
    let LocalReturnObject = {};

    inSideBarArray.forEach(LoopTableName => {
        LoopTableName.children.forEach(LoopInsideFile => {
            // console.log("LoopInsideFile : ", LoopInsideFile);
            let LocalFileData = fs.readFileSync(LoopInsideFile.filePath, "utf8");
            let LocalfileNameReplaced = LocalFileData.replace("{% set filename = '' %}", `{% set filename = '${LoopInsideFile.url}' %}`)
            fs.writeFileSync(`${destinationPath}/${LoopInsideFile.url}`, LocalfileNameReplaced);
        });
    });

    return LocalReturnObject;
};

export { StartFunc }