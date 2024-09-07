import { StartFunc as PostEndPoints } from "./PostEndPoints/EntryFile.js";

let StartFunc = ({ inTablesCollection, inTo, inConfigJson }) => {
    PostEndPoints({ inTablesCollection, inTo, inConfigJson });
};

export { StartFunc };