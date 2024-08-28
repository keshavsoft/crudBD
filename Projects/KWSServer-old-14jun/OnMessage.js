let CommonAsJson = require('./ReceiveMessage/AsJson');
let CommonAsString = require('./ReceiveMessage/AsString');

let StartFunc = ({ inMessageAsString, inClients, inws, inwss, inVerifyToken }) => {
    const metadata = inClients.get(inws);
    let LocalMessageAsString = inMessageAsString.toString();
};

module.exports = StartFunc;