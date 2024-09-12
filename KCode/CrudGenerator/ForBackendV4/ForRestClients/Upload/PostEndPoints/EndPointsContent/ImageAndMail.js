import fs from "fs";
const CommonUpload = "Upload";
const CommonEndPoint = "ImageAndMail";

import { StartFunc as returnTableSchema } from "../returnTableSchema.js";

const StartFunc = ({ inFrom, inTo, inConfigJson, inTableNameWithExtension }) => {
    let LocalFileData = `POST http://localhost:${inFrom}/${CommonUpload}/${CommonEndPoint}\r\n`;
    LocalFileData += `Content-Type: application/json\r\n`;

    let LocalColumnsSchema = returnTableSchema({
        inConfigJson,
        inTableNameWithExtension
    });

    fs.writeFileSync(`${inTo}/${CommonEndPoint}.http`, `${LocalFileData}\r\n${JSON.stringify(LocalColumnsSchema)}`);
};

export { StartFunc };