import fs from "fs";
import path, { resolve } from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CommonFromFolder = resolve(__dirname, "../../../src/FrontEnd/assets/static/js");

import { StartFunc as GetTableNamesAsArray } from "../../ForFrontEndSingleTable/ReturnTableNamesAsArray.js";

const StartFunc = () => {
    try {
        let TableNamesAsArray = GetTableNamesAsArray();

        fs.mkdirSync(`${CommonFromFolder}/pagesForAllTables`);

        TableNamesAsArray.forEach(LoopTableName => {
            fs.mkdirSync(`${CommonFromFolder}/pagesForAllTables/${LoopTableName}`);

            fs.cpSync(`${CommonFromFolder}/pages`, `${CommonFromFolder}/pagesForAllTables/${LoopTableName}`, {
                recursive: true
            });
        });

    } catch (error) {
        console.log(error.message);
    };
};

export { StartFunc }