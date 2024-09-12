import fs from "fs";
const CommonCreate = "Create";
import { StartFunc as returnTableSchema } from "../returnTableSchema.js";

const StartFunc = ({ inFrom, inTo, inConfigJson, inTableNameWithExtension }) => {
    let LocalFileData = `POST http://localhost:${inFrom}/${CommonCreate}\r\n`;
    LocalFileData += `Content-Type: application/json\r\n`;

    let LocalColumnsSchema = returnTableSchema({
        inConfigJson,
        inTableNameWithExtension
    });

    fs.writeFileSync(`${inTo}/AsIs.http`, `${LocalFileData}\r\n${JSON.stringify(LocalColumnsSchema)}`);
};

export { StartFunc };