import { WebSocketServer } from 'ws';
import { StartFunc as CommoninsertToClients } from './insertToClients.js';
import { StartFunc as CommonOnMessage } from "./OnMessage/EntryFile.js";

let wss;

const clients = new Map();

let StartFunc = (server) => {
    wss = new WebSocketServer({ server });

    wss.on("connection", WsOnConnection);
};

let WsOnConnection = (ws, req) => {
    console.log("IP address of the connected user is:", req.cookies, req.headers.cookie, req.connection.remoteAddress);
    CommoninsertToClients({
        inClients: clients,
        ws
    });

    let localWebSocketData = clients.get(ws);
    // console.log("localWebSocketData",localWebSocketData);

    ws.send(JSON.stringify({ Type: 'GetWebSocketId', webSocketId: localWebSocketData.id }));
    // CommonSaveToJsonOnConnections({
    //     inVerifyToken: LocalFromVerifyToken,
    //     inws: ws,
    //     inClients: clients,
    //     inRequest: req
    // });

    ws.on('message', (data, isBinary) => {
        CommonOnMessage({
            inData: data,
            inws: ws,
            inClients: clients,
            inWss: wss
        });
    });

    ws.on('close', () => {
        // wss.clients.forEach((client) => {
        //     if (client !== ws && client.readyState === WebSocket.OPEN) {
        //       client.send(JSON.stringify({ type: 'user offline', userId: localWebSocketData.id })); // Customize message, extract user ID from URL
        //     }
        // });
        clients.delete(ws);
        console.log("Number of users online: ", clients.size);
    });

    ws.send(Date.now());
};

export { StartFunc };