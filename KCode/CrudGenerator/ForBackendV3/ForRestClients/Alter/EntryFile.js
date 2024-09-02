import { StartFunc as PutEndPoints } from "./PutEndPoints/EntryFile.js";

let StartFunc = ({ inTablesCollection, inTo, inConfigJson }) => {
    PutEndPoints({ inTablesCollection, inTo, inConfigJson });
};

export { StartFunc };