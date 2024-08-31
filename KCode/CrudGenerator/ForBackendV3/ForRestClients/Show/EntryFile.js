import fs from "fs";
import path from "path";
import dotenv from 'dotenv';
dotenv.config();
const CommonShow = "Show";
import { StartFunc as GetEndPoints } from "./GetEndPoints/EntryFile.js";
import { StartFunc as PostEndPoints } from "./PostEndPoints/EntryFile.js";

let StartFunc = ({ inTablesCollection, inTo, inConfigJson }) => {
    GetEndPoints({ inTablesCollection, inTo });
    PostEndPoints({ inTablesCollection, inTo, inConfigJson });
};

export { StartFunc };