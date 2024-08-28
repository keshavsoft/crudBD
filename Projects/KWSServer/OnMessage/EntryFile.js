import { StartFunc as CommonMessageAsJson } from "./MessageAsJson/EntryFile.js";
import { StartFunc as CommonMessageAsString } from "./MessageAsString/EntryFile.js";

let StartFunc = ({ inData, inws, inClients, inWss }) => {
    let LocalData = inData;

    try {
        let LocalDataAsJson = JSON.parse(LocalData);

        CommonMessageAsJson({ inDataAsJson: LocalDataAsJson, inws, inClients, inWss });

        return;
    } catch (error) {
    };

    CommonMessageAsString({ inDataAsString: LocalData.toString(), inws, inClients });
};

export { StartFunc };