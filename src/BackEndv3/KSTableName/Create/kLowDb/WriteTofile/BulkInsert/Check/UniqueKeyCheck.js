const StartFunc = ({ inData, inDataToInsert, inTableSchema }) => {
    let LocalInData = inData;
    let LocalTableSchema = inTableSchema;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    let LocalKeysNeeded = {};

    for (const prop in LocalTableSchema) {
        if (LocalTableSchema[prop].unique) {
            LocalKeysNeeded[prop] = LocalTableSchema[prop];
        };
    };

    for (const prop in LocalKeysNeeded) {

        const LoopInsideFilter = inDataToInsert.filter(item1 => !LocalInData.some(item2 => item1[prop] === item2[prop]));

        if (LoopInsideFilter.length === 0) {
            LocalReturnData.KReason = `Unique error : ${prop}`;
            return LocalReturnData;
        };

        LocalReturnData.KTF = true;
        LocalReturnData.JsonData = LoopInsideFilter;
        return LocalReturnData;
    };

    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = inDataToInsert;

    return LocalReturnData;
};

export { StartFunc };