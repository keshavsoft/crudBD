let CommonToConnectedClients = require("../ToConnectedClients/EntryFile")

let StartFunc = ({ inVerifyToken, inws, inClients, inRequest }) => {
    CommonToConnectedClients({ inVerifyToken, inws, inClients, inRequest });
};

module.exports = StartFunc;
