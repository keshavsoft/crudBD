import fs from "fs";
import path, { resolve } from 'path'
import { fileURLToPath } from 'url';

// import { StartFunc as GetTableNamesAsArray } from "../KCode/ForFrontEndSingleTable/ReturnTableNamesAsArray.js";
import { StartFunc as GetTableNamesAsArray } from "../../ForFrontEndSingleTable/ReturnTableNamesAsArray.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CommonFromFolder = resolve(__dirname, "../../../src/FrontEnd/TableNameSingle");

const LocalFuncGetFiles = () => {
    const root = CommonFromFolder;
    let files = {}

    fs.readdirSync(root)
        .filter(filename => filename.endsWith('.html'))
        .forEach(filename => {
            files[filename.slice(0, -5)] = resolve(root, filename)
        });

    return files;
};

const StartFunc = ({ inToPath }) => {
    let TableNamesAsArray = GetTableNamesAsArray();
    let LocalHtmlFiles = LocalFuncGetFiles();
    // console.log("LocalHtmlFiles : ", LocalHtmlFiles, inToPath);
    TableNamesAsArray.forEach(LoopTableName => {
        for (const [key, value] of Object.entries(LocalHtmlFiles)) {
            let LocalFileData = fs.readFileSync(value, "utf8");

            if (key === "index") {
                fs.writeFileSync(`${inToPath}/${key}.html`, LocalFileData);
                continue;
            } else {
                let LocalFindScript = LocalFileData.search('<script type="module" src="../assets/static/js/pages/ShowFromJson/StartFunc.js"></script>');

                // if (LocalFindScript >= 0) {
                //     fs.writeFileSync(`${inToPath}/${LoopTableName}${key}.html`, LocalFileData.replace('<script type="module" src="../assets/static/js/pages/ShowFromJson/StartFunc.js"></script>',`<script type="module" src="../assets/static/js/src/FrontEnd/assets/static/js/pagesForAllTables/${LoopTableName}/ShowFromJson/StartFunc.js"></script>`));
                // } else {
                //     fs.writeFileSync(`${inToPath}/${LoopTableName}${key}.html`, LocalFileData);
                // };

                fs.writeFileSync(`${inToPath}/${LoopTableName}${key}.html`, LocalFileData);
            };
        };
    });
};

export { StartFunc }