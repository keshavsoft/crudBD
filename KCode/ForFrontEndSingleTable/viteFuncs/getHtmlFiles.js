import fs from 'fs';
import { resolve } from 'path'

const StartFunc = ({ inRootFolder }) => {
    const root = `${inRootFolder}/HtmlFiles`;
    let files = {};

    // fs.readdirSync(root)
    //     .filter(filename => filename.endsWith('.html'))
    //     .forEach(filename => {
    //         files[filename.slice(0, -5)] = resolve(root, filename)
    //     });

    let FolderNamesArray = fs.readdirSync(root)
        .filter(filename => fs.statSync(root + '/' + filename).isDirectory())
        .map(filename => {
            return {
                name: filename,
                icon: "bi bi-plus-circle"
            }
        });

    FolderNamesArray.forEach(LoopFolderName => {
        fs.readdirSync(`${root}/${LoopFolderName.name}`)
            .filter(filename => filename.endsWith('.html'))
            .forEach(filename => {
                files[filename.slice(0, -5)] = resolve(`${root}/${LoopFolderName.name}`, filename)
            });
    });

    return files;
};

export { StartFunc }