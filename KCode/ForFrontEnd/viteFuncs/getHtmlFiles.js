import fs from 'fs'
import { resolve } from 'path'

const StartFunc = ({ inRootFolder }) => {
    const root = `${inRootFolder}/HtmlFiles`;
    let files = {};

    fs.readdirSync(root)
        .filter(filename => filename.endsWith('.html'))
        .forEach(filename => {
            files[filename.slice(0, -5)] = resolve(root, filename)
        });

    return files;
};

export { StartFunc }