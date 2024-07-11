import fs from "fs";
import path, { resolve } from 'path'
import { fileURLToPath } from 'url';
import dirTree from "directory-tree";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CommonFromFolder = resolve(__dirname, "../../../src/FrontEnd/assets/static/js/pagesForAllTables");
import { StartFunc as ReadDataSchema } from "../../ReadDataSchema.js";

const StartFunc = () => {
    const tree = dirTree(CommonFromFolder);
    let LocalDataSchema = ReadDataSchema();

    tree.children.forEach(LoopTable => {

        const LocalJsonFiles = LoopTable.children.filter(element => {
            return element.name.endsWith("ShowFromJson");
        });

        const LocalAllFiles = walkSync(LocalJsonFiles[0].path);

        const LocalColumnsJsonFiles = LocalAllFiles.filter(element => {
            return element.endsWith("columns.json");
        });

        // LocalColumnsJsonFiles.forEach(element => {
        //     let LocalFileData = fs.readFileSync(element, "utf8");

        //     // console.log("LocalFileData : ", element.replace(`${CommonFromFolder}/`, "").split("/")[0], LocalFileData, LocalDataSchema);

        //     console.log("LocalFileData : ", element, LocalFileData, LocalDataSchema);
        // });

    });
};

var walkSync = function (dir, filelist) {
    var files = fs.readdirSync(dir);

    filelist = filelist || [];

    files.forEach(function (file) {
        if (fs.statSync(`${dir}/${file}`).isDirectory()) {
            filelist = walkSync(`${dir}/${file}/`, filelist);
        }
        else {
            filelist.push(`${dir}/${file}`);
        }
    });

    return filelist;
};

export { StartFunc }