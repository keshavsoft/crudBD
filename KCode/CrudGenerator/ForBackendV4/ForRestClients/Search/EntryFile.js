import { StartFunc as GetEndPoints } from "./GetEndPoints/EntryFile.js";

let StartFunc = ({ inTablesCollection, inTo, inConfigJson }) => {
    GetEndPoints({ inTablesCollection, inTo });
};

export { StartFunc };