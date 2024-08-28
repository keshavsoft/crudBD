let StartFunc = ({ inDataAsJson }) => {
    let LocalDataAsJson = inDataAsJson;

    if ("Type" in LocalDataAsJson) {
        if (LocalDataAsJson.Type === "FromPeer") {
            console.log("LocalDataAsJson : ", LocalDataAsJson.Message);
        };
    };
};

module.exports = StartFunc;