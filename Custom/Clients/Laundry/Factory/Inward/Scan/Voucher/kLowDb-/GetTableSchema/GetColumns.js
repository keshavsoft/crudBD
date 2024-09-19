import Configjson from '../../../Config.json' assert { type: 'json' };
import tableNameJson from '../../tableName.json' assert { type: 'json' };

let StartFunc = () => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    let LocaltableName = tableNameJson.tableName;

    LocalReturnData.KTF = false;
    let LocalTableColumns = Configjson.jsonConfig.tableAndColumns;

    if ("children" in LocalTableColumns === false) {
        return false;
    };

    let LocalFindColumns = LocalTableColumns.children.find(element => {
        return element.name === LocaltableName;
    });

    return LocalFindColumns.fileData;
};

export { StartFunc };