import fs from "fs";
import path from "path";
import dotenv from 'dotenv';

dotenv.config();
const CommonCreate = "Create";

import { StartFunc as home } from "./EndPointsContent/home.js";
import { StartFunc as GenUuId } from "./EndPointsContent/GenUuId.js";
import { StartFunc as WithCheckAndGenPk } from "./EndPointsContent/WithCheckAndGenPk.js";
import { StartFunc as SendMailGenUuId } from "./EndPointsContent/SendMailGenUuId.js";
import { StartFunc as SendMail } from "./EndPointsContent/SendMail.js";
import { StartFunc as ForTemplate } from "./EndPointsContent/ForTemplate.js";
import { StartFunc as WithReferenceCheck } from "./EndPointsContent/WithReferenceCheck.js";
import { StartFunc as AsIs } from "./EndPointsContent/AsIs.js";

let StartFunc = ({ inTablesCollection, inTo, inConfigJson }) => {
    let LocalTypeName = `${CommonCreate}/restClients/PostEndPoints`;
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

        GenUuId({
            inFrom: `${process.env.PORT}/${LocalTo}/${LoopInsideFileName}`,
            inTo: `${LocalFilePath}`,
            inConfigJson,
            inTableNameWithExtension: element.name
        });

        WithCheckAndGenPk({
            inFrom: `${process.env.PORT}/${LocalTo}/${LoopInsideFileName}`,
            inTo: `${LocalFilePath}`,
            inConfigJson,
            inTableNameWithExtension: element.name
        });

        SendMailGenUuId({
            inFrom: `${process.env.PORT}/${LocalTo}/${LoopInsideFileName}`,
            inTo: `${LocalFilePath}`,
            inConfigJson,
            inTableNameWithExtension: element.name
        });

        SendMail({
            inFrom: `${process.env.PORT}/${LocalTo}/${LoopInsideFileName}`,
            inTo: `${LocalFilePath}`,
            inConfigJson,
            inTableNameWithExtension: element.name
        });

        ForTemplate({
            inFrom: `${process.env.PORT}/${LocalTo}/${LoopInsideFileName}`,
            inTo: `${LocalFilePath}`,
            inConfigJson,
            inTableNameWithExtension: element.name
        });

        WithReferenceCheck({
            inFrom: `${process.env.PORT}/${LocalTo}/${LoopInsideFileName}`,
            inTo: `${LocalFilePath}`,
            inConfigJson,
            inTableNameWithExtension: element.name
        });

        AsIs({
            inFrom: `${process.env.PORT}/${LocalTo}/${LoopInsideFileName}`,
            inTo: `${LocalFilePath}`,
            inConfigJson,
            inTableNameWithExtension: element.name
        });

    });
};

const LocalFuncFilterDataFromBody = ({ inFrom, inTo, inConfigJson, inTableNameWithExtension }) => {
    let LocalFileData = `POST http://localhost:${inFrom}/${CommonCreate}\r\n`;
    LocalFileData += `Content-Type: application/json\r\n`;

    let LocalColumnsSchema = LocalFuncGetTableSchema({
        inConfigJson,
        inTableNameWithExtension
    });

    fs.writeFileSync(`${inTo}/home.http`, `${LocalFileData}\r\n${JSON.stringify(LocalColumnsSchema)}`);
};

const LocalFuncGetTableSchema = ({ inConfigJson, inTableNameWithExtension }) => {
    let LocalChildren = inConfigJson.jsonConfig.tableAndColumns.children;
    let LocalColumnsSchemaToReturn = {};

    let LocalColumnsSchema = LocalChildren.find(element => {
        return element.name === inTableNameWithExtension;
    });

    for (const [key, value] of Object.entries(LocalColumnsSchema.fileData)) {
        LocalColumnsSchemaToReturn[key] = "";
    };

    return LocalColumnsSchemaToReturn;
};

export { StartFunc };