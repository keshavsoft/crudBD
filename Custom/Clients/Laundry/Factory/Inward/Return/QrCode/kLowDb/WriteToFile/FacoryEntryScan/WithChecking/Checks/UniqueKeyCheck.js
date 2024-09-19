const StartFunc = ({ inData, inDataToInsert, inSchema }) => {
    let LocalInData = inData;
    let LocalTableSchema = inSchema;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    let LocalKeysNeeded = {};

    for (const prop in LocalTableSchema) {
        if (LocalTableSchema[prop].unique) {
            LocalKeysNeeded[prop] = LocalTableSchema[prop];
        };
    };

    for (const prop in LocalKeysNeeded) {
        let LoopInsideFilter = LocalInData.find(element => {
            return element[prop] === inDataToInsert[prop];
        });

        if (LoopInsideFilter === undefined === false) {
            LocalReturnData.KReason = `Unique error : ${prop}`;
            return LocalReturnData;
        };
    };

    LocalReturnData.KTF = true;

    return LocalReturnData;
};

export { StartFunc };