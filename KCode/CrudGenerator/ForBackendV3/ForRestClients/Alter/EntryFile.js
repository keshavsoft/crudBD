import { StartFunc as PutEndPoints } from "./PutEndPoints/EntryFile.js";
import { StartFunc as GetEndPoints } from "./GetEndPoints/EntryFile.js";

let StartFunc = ({ inTablesCollection, inTo, inConfigJson }) => {
    PutEndPoints({ inTablesCollection, inTo, inConfigJson });
    GetEndPoints({ inTablesCollection, inTo, inConfigJson });
};

export { StartFunc };