import path from "path";

const CommonUpload = "Upload";

import { StartFunc as home } from "./EndPointsContent/home.js";
import { StartFunc as ImageUsingMulter } from "./EndPointsContent/ImageUsingMulter.js";
import { StartFunc as ImageAndMail } from "./EndPointsContent/ImageAndMail.js";

let StartFunc = ({ inTablesCollection, inTo, inConfigJson }) => {
    let LocalTypeName = `${CommonUpload}/restClients/PostEndPoints`;
    let LocalTo = inTo;

    let LocalTablesCollection = inTablesCollection;

    let LocalFirstLevelFolders = LocalTablesCollection.children.filter(element => {
        return "children" in element === false;
    }).filter(element => element.name.endsWith(".json"))

    LocalFirstLevelFolders.forEach(element => {
        let LoopInsideFileName = path.parse(element.name).name;
        let LocalFilePath = `${LocalTo}/${LoopInsideFileName}/${LocalTypeName}`;

        home({
            inFrom: `${process.env.PORT}/${LocalTo}/${LoopInsideFileName}`,
            inTo: `${LocalFilePath}`,
            inConfigJson,
            inTableNameWithExtension: element.name
        });

        ImageUsingMulter({
            inFrom: `${process.env.PORT}/${LocalTo}/${LoopInsideFileName}`,
            inTo: `${LocalFilePath}`,
            inConfigJson,
            inTableNameWithExtension: element.name
        });

        ImageAndMail({
            inFrom: `${process.env.PORT}/${LocalTo}/${LoopInsideFileName}`,
            inTo: `${LocalFilePath}`,
            inConfigJson,
            inTableNameWithExtension: element.name
        });
    });
};

export { StartFunc };