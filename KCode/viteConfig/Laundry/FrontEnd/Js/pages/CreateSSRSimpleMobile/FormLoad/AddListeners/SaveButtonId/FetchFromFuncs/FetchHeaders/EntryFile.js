import KeysJson from './Keys.json' assert {type: 'json'};

let StartFunc = () => {
    let jVarLocalForm = document.getElementById("FormId");

    KeysJson.body = JSON.stringify(jFLocalserializeFormData(jVarLocalForm));

    return KeysJson;
};

function jFLocalserializeFormData(form) {
    var formData = new FormData(form);
    var serializedData = {};

    for (var [name, value] of formData) {
        if (serializedData[name]) {
            if (!Array.isArray(serializedData[name])) {
                serializedData[name] = [serializedData[name]];
            }
            serializedData[name].push(value);
        } else {
            serializedData[name] = value;
        }
    }

    return serializedData;
};

export { StartFunc }