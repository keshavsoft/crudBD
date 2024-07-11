import { StartFunc as UserTable } from "./generateVariables/buildType/UserTable.js";

const StartFunc = ({ mode, inFilesArray, inBuildType }) => {
    return UserTable({ mode, inFilesArray, inTableName: inBuildType });
};

export { StartFunc };