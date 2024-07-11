import ConfigJson from '../../../../../bin/Config.json' assert {type: 'json'};

let StartFunc = () => {
    let LocalReturnData = { KTF: false }
    let LoopInsideArray = [];

    ConfigJson.jsonConfig.tableAndColumns.children.forEach(element => {
        for (const [key, value] of Object.entries(element.fileData)) {
            if ("references" in value) {
                LoopInsideArray.push(value.references.model);
            };
        };
    });

    LocalReturnData.JsonData = LoopInsideArray;
    return LocalReturnData;
};

export { StartFunc };
