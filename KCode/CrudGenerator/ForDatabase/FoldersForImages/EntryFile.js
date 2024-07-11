let StartFunc = ({ inFilesArray, inDataPk }) => {
    LocalFuncCreateFolders({
        inColumnsJson: inFilesArray,
        inDataPk
    });
};

let LocalFuncCreateFolders = ({ inJsonPath, inTableConfig }) => {
    let LocalDataPath = inJsonPath;

    try {
        inTableConfig.forEach(element => {
            fs.mkdirSync(`${LocalDataPath}/${element.tableName}`)
        });
    } catch (err) {
        console.log(err);
    };
};

export { StartFunc };
