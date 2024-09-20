import { StartFunc as PullData } from "../PullData/EntryFile.js";

let StartFunc = () => {
    let LocalReturnObject = {};

    let LocalData = PullData();

    LocalReturnObject.KTF = true;

    LocalReturnObject.JsonData = {
        columns: convertObjectToArray({ inColumnsObject: LocalData.inTableSchema.fileData }),
        data: LocalData.inDb.data
    };

    return LocalReturnObject;
};

const convertObjectToArray = ({ inColumnsObject }) => {
    const LocalColumnsArray = [];

    for (const [key, value] of Object.entries(inColumnsObject)) {
        LocalColumnsArray.push({
            field: key,
            title: key
        });
    };

    return LocalColumnsArray;
};

export { StartFunc };