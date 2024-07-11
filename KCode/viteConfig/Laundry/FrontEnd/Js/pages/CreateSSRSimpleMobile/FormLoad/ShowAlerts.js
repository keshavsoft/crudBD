const StartFunc = () => {
    jFLocalForConfig();
    jFLocalForData();
};

const jFLocalForConfig = () => {
    let jVarLocalFolderCreated = getUrlQueryParams({ inGetKey: "NewFolderName" });

    let jVarLocalForConfig = getUrlQueryParams({ inGetKey: "ConfigFolderCreated" });

    if (jVarLocalForConfig === null) {
        const alert = bootstrap.Alert.getOrCreateInstance('#ConfigFolderInsertSuccessId');
        alert.close();
    } else {
        let jVarLocalConfigFolderInsertSuccessStrongId = document.getElementById("ConfigFolderInsertSuccessStrongId");
        jVarLocalConfigFolderInsertSuccessStrongId.innerHTML = jVarLocalFolderCreated;
    };
};

const jFLocalForData = () => {
    let jVarLocalFolderCreated = getUrlQueryParams({ inGetKey: "NewFolderName" });
    let jVarLocalForData = getUrlQueryParams({ inGetKey: "DataFolderCreated" });

    if (jVarLocalForData === null) {
        const alert = bootstrap.Alert.getOrCreateInstance('#DataFolderInsertSuccessId');
        alert.close();
    } else {
        let jVarLocalConfigFolderInsertSuccessStrongId = document.getElementById("DataFolderInsertSuccessStrongId");
        jVarLocalConfigFolderInsertSuccessStrongId.innerHTML = jVarLocalFolderCreated;
    };

};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };
