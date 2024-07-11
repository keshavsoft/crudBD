import path from "path";
import { StartFunc as ReadDataSchema } from "../../ReadDataSchema.js";

const StartFunc = () => {
    let LocalTableNames = ReadDataSchema();

    let LocalTableNamesArray = LocalTableNames.children?.map(element => {
        return path.parse(element.name).name;
    });

    return LocalTableNamesArray;
};

export { StartFunc };



// import { StartFunc as StartFuncBackend } from "./CrudGenerator/Backend.js";

// let LocalFilesArray = StartFuncReadDataSchema();
// // console.log("LocalFilesArray : ", LocalFilesArray);

// StartFuncBackend({ inFilesArray: LocalFilesArray });
