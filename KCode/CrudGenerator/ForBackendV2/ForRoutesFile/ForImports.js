import path from "path";
const CommonToSearch = "import { router as RouterForKSTableName } from './KSTableName/routes.js';"
const CommonTableName = "KSTableName";

let StartFunc = ({ inEndPointsArray, inFileData }) => {
    let LocalEndPointsArray = inEndPointsArray;

    let LocalFileData = inFileData;

    // let LocalToSearch = "import { router as routerFromksSample } from './ksSample/routes.js';";
    let LocalToSearch = CommonToSearch;

    let FromLocalForEndPoints = LocalForEndPoints({ inEndPointsArray: LocalEndPointsArray, inToSearch: LocalToSearch });
    let LocalNewData = LocalFileData.replaceAll(LocalToSearch, FromLocalForEndPoints);

    return LocalNewData;
};

let LocalForEndPoints = ({ inEndPointsArray, inToSearch }) => {
    let LocalEndPointsArray = inEndPointsArray;

    let LocalToSearch = inToSearch;

    let LocalNewArray = LocalEndPointsArray.map(element => {
        return LocalToSearch.replaceAll(CommonTableName, path.parse(element.name).name);
    });

    return LocalNewArray.join("\r\n");
};

export { StartFunc };