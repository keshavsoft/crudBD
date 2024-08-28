let CommonChatFolder = require("../../../../DataSupply/Fs/Config/JSONFolder/CommonChatFolder/JsonFile/ItemName/PushData/WithContent");

let StartFunc = ({ inVerifyToken, inws, inClients, inRequest }) => {
    const metadata = inClients.get(inws);

    let LocalItemName = metadata.id;

    let LocalFromForExistence;

    const ip = inRequest.socket.remoteAddress;
    metadata.UserInfo = {};
    metadata.UserInfo.remoteAddress = ip;
    // metadata.UserInfo.UserPk = inVerifyToken.UserName;

    LocalFromForExistence = CommonChatFolder.StartFunc({
        inItemName: LocalItemName,
        inItemNameContent: {
            metadata,
            Chat: []
        }
    });

    return LocalFromForExistence;
};

module.exports = StartFunc;
