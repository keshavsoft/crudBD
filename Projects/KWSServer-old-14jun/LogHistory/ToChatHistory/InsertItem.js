// let CommonFromDataSupply = require("../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/PushData/ItemNameInsert/ItemNameAsArray");

let CommonToKey = require("../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/PushData/ToKey/ToArray");

let StartFunc = ({ inDataPK, inItemName, inClients, inMessage }) => {
    let LocalFolderName = "ForChat";
    //let LocalFileName = "ChatHistory";

    let LocalFileName = process.env.UUID;

    let LocalFromForExistence = CommonToKey.StartFunc({
        inFolderName: LocalFolderName,
        inFileNameOnly: LocalFileName,
        inItemName,
        inDataPK,
        inMainRowPK: "Chat",
        inDataToInsert: inMessage
    });
};

module.exports = StartFunc;
