import { StartFunc as StartFuncreturnOnlineClients } from "./returnOnlineClients.js";
import { StartFunc as StartFuncGetWebSocketId } from "./getWebSocketId.js";
import { StartFunc as StartFuncreturnOnlineClientsWOMe } from "./returnOnlineClientsWOMe.js";
import { StartFunc as myChat } from "./myChat.js";
import { StartFunc as myPhone } from "./myPhone.js";

let StartFunc = ({ inDataAsString, inws, inClients, inChatLog, inSendFunc }) => {
    let LocalDataAsSting = inDataAsString;

    if (LocalDataAsSting === "returnOnlineClients") {
        StartFuncreturnOnlineClients({ inDataAsString: LocalDataAsSting, inws: inws, inClients, inSendFunc });
    };

    if (LocalDataAsSting === "GetWebSocketId") {
        StartFuncGetWebSocketId({ inDataAsString: LocalDataAsSting, inws, inClients, inSendFunc });
    };

    if (LocalDataAsSting === "returnOnlineClientsWOMe") {
        StartFuncreturnOnlineClientsWOMe({ inDataAsString: LocalDataAsSting, inws: inws, inClients: inClients });
    };

    if (LocalDataAsSting === "myChat") {
        myChat({ inChatLog, inws: inws, inClients: inClients });
    };

    if (LocalDataAsSting === "myPhone") {
        myPhone({ inSendFunc });
    };

    LocalFuncAiChat({ inDataAsString, inws, inClients, inChatLog, inSendFunc });
};

const LocalFuncAiChat = ({ inDataAsString, inws, inClients, inChatLog, inSendFunc }) => {
    let LocalSendObject = inClients.get(inws);

    let LocalLastFind = inChatLog.findLast(element => {
        return element.id === LocalSendObject.id && element.InOut === "Out";
    });

    console.log("LocalLastFind : ", LocalLastFind);

    switch (LocalLastFind.data.Type) {
        case "IsStudent":
            console.log("LocalL---------------");
            inSendFunc({ inMessage: "YourName" });
            break;
        default:
            break;
    };
};

export { StartFunc };