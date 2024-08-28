const WebSocket = require('ws');
let wss;
const clients = new Map();
let CommoninsertToClients = require('./insertToClients')
let CommonOnMessage = require('./OnMessage/EntryFile');
let CommonSaveToJsonOnConnections = require("./LogHistory/OnConnection/EntryFile")

let StartFunc = (server) => {
    wss = new WebSocket.Server({ server });

    wss.on("connection", WsOnConnection);
};

let WsOnConnection = (ws, req) => {
    CommoninsertToClients({
        inClients: clients,
        ws
    });

    CommonSaveToJsonOnConnections({
        inVerifyToken: LocalFromVerifyToken,
        inws: ws,
        inClients: clients,
        inRequest: req
    });

    ws.on('message', (data, isBinary) => {
        console.log("aaaaaaaaaaa : ", data.toString(), isBinary);

        // wss.clients.forEach(function each(client) {
        //     if (client !== ws && client.readyState === WebSocket.OPEN) {
        //         client.send(data, { binary: isBinary });
        //     }
        // });

        CommonOnMessage({
            inData: data
        });

        setTimeout(function timeout() {
            ws.send(Date.now());
        }, 500);
    });

    ws.on('close', () => {
        console.log('closed');
    });

    // ws.send('Hai Socket established');
    ws.send(Date.now());
};

module.exports = StartFunc;