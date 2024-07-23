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
    // console.log("aaaaaaaaaa : ", LoopInsideArray, ConfigJson.jsonConfig.tableAndColumns.children);
    LocalReturnData.JsonData = uniqueArray4(LoopInsideArray);
    return LocalReturnData;
};

function uniqueArray4(a) {
    return [...new Set(a)];
};

export { StartFunc };
