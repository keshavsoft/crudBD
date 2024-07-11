import fs from 'fs'
import { resolve } from 'path'
import { StartFunc as CopySchema } from "./CopySchema.js";

const StartFunc = ({ inRootFolder }) => {
    const root = inRootFolder;
    let files = {}

    fs.readdirSync(root)
        .filter(filename => filename.endsWith('.html'))
        .forEach(filename => {
            files[filename.slice(0, -5)] = resolve(root, filename)
        });

    CopySchema();

    return files;
};

export { StartFunc }