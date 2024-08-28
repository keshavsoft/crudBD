let CommonFromDataSupply = require("../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/PushData/AsArray/EntryFile");

let StartFunc = ({ inVerifyToken, inItemName, inMessage }) => {
    let LocalFolderName = "ForChat";
    let LocalFileName = "ChatHistory";

    let LocalItemName = inItemName;

    let LocalFromForExistence = CommonFromDataSupply.StartFunc(
        {
            inFolderName: LocalFolderName,
            inFileNameOnly: LocalFileName,
            inItemName: LocalItemName,
            inDataPK: inVerifyToken.DataPk,
            inDataToInsert: inMessage
        });
    
    return LocalFromForExistence;
};

module.exports = StartFunc;
