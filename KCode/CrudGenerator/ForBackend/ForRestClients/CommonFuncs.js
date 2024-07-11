import fs from "fs";
import path from "path";

let StartFunc = ({ inFilesCollection, inTo, inTypeName, inFileName, inFrom }) => {
    let LocalTypeName = inTypeName;
    let LocalTo = inTo;
    let LocalFileName = inFileName;
    let LocalFrom = inFrom;

    let LocalFilesCollection = inFilesCollection;

    LocalFilesCollection.forEach(LoopFile => {

        let LoopInsideFileName = path.parse(LoopFile.name).name;
        let LocalFilePath = `${LocalTo}/${LoopInsideFileName}/${LocalTypeName}/${LocalFileName}`;

        let LocalFileData = fs.readFileSync(LocalFilePath);

        let LocalFileDataReplaced = LocalFileData.toString().replaceAll("ksSample", LoopInsideFileName);
        let LocalBinReplaced = LocalFileDataReplaced.replaceAll(LocalFrom, LocalTo);

        fs.writeFileSync(LocalFilePath, LocalBinReplaced);
    });
};

export { StartFunc };