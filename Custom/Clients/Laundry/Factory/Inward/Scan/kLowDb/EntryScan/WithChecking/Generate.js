const StartFunc = ({ inDataToInsert, inData, inColumns }) => {
    let LocalInData = inData;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    let LocalDefalultKeys = LocalFuncDefalultKeys({ inColumns })
    let LocalArrayPk = LocalInData.map(element => element.pk);

    let LocalRemoveUndefined = LocalArrayPk.filter(function (element) {
        return element !== undefined;
    });

    let numberArray = LocalRemoveUndefined.map(Number);

    let MaxPk = (Math.max(...numberArray, 0) + 1);

    LocalReturnData.InsertData = { ...LocalDefalultKeys, ...inDataToInsert, UuId: MaxPk, pk: MaxPk, DateTime: Timestamp() };
    LocalReturnData.KTF = true;
    return LocalReturnData
};

const Timestamp = () => {
    let currentDate = new Date();
    let formattedDate = currentDate.toISOString();
    return formattedDate;
};

const LocalFuncDefalultKeys = ({ inColumns }) => {
    let LocalinColumns = inColumns;

    let LocalDefaultfilteredObject = Object.fromEntries(
        Object.entries(LocalinColumns)
            .filter(([key, value]) => "defaultValue" in value)
            .map(([key, value]) => [key, value.defaultValue])
    );

    return LocalDefaultfilteredObject;
};

export { StartFunc };