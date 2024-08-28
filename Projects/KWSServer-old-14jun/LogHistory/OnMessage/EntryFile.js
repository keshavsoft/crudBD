let CommonToChatHistoryToItem = require("../ToChatHistory/InsertItem")

let StartFunc = ({ inDataPK, inItemName, inMessage }) => {
    let LocalToChatHistoryToItem = CommonToChatHistoryToItem({ inDataPK, inItemName, inMessage });
};

module.exports = StartFunc;
