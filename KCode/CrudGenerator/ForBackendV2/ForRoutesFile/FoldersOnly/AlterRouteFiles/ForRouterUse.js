import path from 'path';

let StartFunc = ({ inTablesCollection, inFileData }) => {
    let LocalFileData = inFileData;

    let LocalToSearch = "router.use('/ksSample', routerFromksSample);";

    let FromLocalForEndPoints = LocalForEndPoints({ inTablesCollection, inToSearch: LocalToSearch });
    let LocalNewData = LocalFileData.replaceAll(LocalToSearch, FromLocalForEndPoints);

    return LocalNewData;
};

let LocalForEndPoints = ({ inTablesCollection, inToSearch }) => {
    let LocalToSearch = inToSearch;

    let LocalNewArray = inTablesCollection.map(element => {
        return LocalToSearch.replaceAll("ksSample", path.parse(element.name).name);
    });

    return LocalNewArray.join("\r\n");
};

export { StartFunc };