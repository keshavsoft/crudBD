import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import ConfigJson from '../../bin/Config.json' with {type: 'json'};

const commonSrcFolder = "../../src/Index/FrontEnd";
const commonDistFolder = "../../../public";

export default {
    root: resolve(__dirname, commonSrcFolder),
    plugins: [handlebars({
        context: {
            title: 'KeshavSoft',
            DataPk: ConfigJson.jsonConfig.DataPk
        },
    })],
    build: {
        outDir: commonDistFolder
    },
    server: {
        port: 8080
    }
}
