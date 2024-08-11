import fs from 'fs'
import path from 'path';
import ConfigJson from '../../bin/Config.json' with {type: 'json'};

const StartFunc = ({ inSrcPath }) => {
    const root = `${inSrcPath}`;
    let files = {};
    let LocalTableNames = ConfigJson.jsonConfig.tableAndColumns.children.map(element => {
        return path.parse(element.name).name;
    });

    // console.log("ConfigJson : ", ConfigJson.jsonConfig.tableAndColumns.children);
    fs.readdirSync(root)
        .filter(filename => filename.endsWith('.html'))
        .forEach(filename => {
            files[`/${filename}`] = {
                DataPk: ConfigJson.jsonConfig.DataPk, tables: LocalTableNames
            }
        });

    return files;
};

export { StartFunc };