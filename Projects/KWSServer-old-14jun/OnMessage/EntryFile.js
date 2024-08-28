let CommonMessageAsJson = require("./MessageAsJson/EntryFile");
let CommonMessageAsString = require("./MessageAsString/EntryFile");

let StartFunc = ({ inData }) => {
    let LocalData = inData;

    try {
        LocalDataAsJson = JSON.parse(LocalData);
        CommonMessageAsJson({ inDataAsJson: LocalDataAsJson });

        return;
    } catch (error) {

    };

    CommonMessageAsString({ inDataAsString: LocalData.toString() });
};

module.exports = StartFunc;