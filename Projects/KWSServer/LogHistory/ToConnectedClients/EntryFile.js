let StartFunc = ({ inws, inClients, inRequest }) => {
    const metadata = inClients.get(inws);

    // let LocalItemName = metadata.id;

    let LocalFromForExistence;

    const ip = inRequest.socket.remoteAddress;
    metadata.UserInfo = {};
    metadata.UserInfo.remoteAddress = ip;

    console.log("metadata : ", metadata);
    // metadata.UserInfo.UserPk = inVerifyToken.UserName;

    // LocalFromForExistence = CommonChatFolder.StartFunc({
    //     inItemName: LocalItemName,
    //     inItemNameContent: {
    //         metadata,
    //         Chat: []
    //     }
    // });

    return true;
};

export { StartFunc };
