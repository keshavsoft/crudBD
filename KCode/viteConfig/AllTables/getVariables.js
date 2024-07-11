import { StartFunc as AllTables } from "./generateVariables/buildType/AllTables.js";

const StartFunc = ({ mode, inFilesArray, inBuildType }) => {
    return AllTables({ mode, inFilesArray, inBuildType });
};

export { StartFunc };