import tableNameJson from '../../../tableName.json' assert {type: 'json'};

let StartFunc = () => {
    let LocalReturnData = { KTF: false }
    let LocalReferenceKeys = {};

    for (const [key, value] of Object.entries(tableNameJson.ColumnsSchema)) {
        if ("references" in value) {
            LocalReferenceKeys[key] = value;
        };
    };

    return LocalReferenceKeys;
};

export { StartFunc };
