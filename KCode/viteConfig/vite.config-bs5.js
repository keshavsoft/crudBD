import { defineConfig, normalizePath, build } from 'vite';
import handlebars from 'vite-plugin-handlebars';
// import ConfigJson from '../../bin/Config.json' with {type: 'json'};

import path, { resolve } from 'path';
import { fileURLToPath } from 'url';

import { StartFunc as StartFuncGetFiles } from "./getFiles.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const commonSrcFolder = "src/Index/FrontEnd";
const commonDistFolder = "public";

let files = StartFuncGetFiles({ inSrcPath: commonSrcFolder });
console.log("files : ", files);

const pageData = {
    '/index.html': {
        title: 'Main Page',
    }
};

build({
    configFile: false,
    build: {
        emptyOutDir: false,
        outDir: resolve(__dirname, commonDistFolder),
        lib: {
            name: 'app',
            formats: ['umd'],
            fileName: 'app',
            entry: `${commonSrcFolder}/js/app.js`,
        },
        rollupOptions: {
            output: {
                entryFileNames: '[name].js'
            }
        }
    },
});

export default {
    publicDir: 'static',
    base: './',
    root: resolve(__dirname, `../../${commonSrcFolder}`),
    plugins: [
        handlebars({
            context(pagePath) {
                return files[pagePath];
            },
        }),
    ],
    build: {
        emptyOutDir: false,
        manifest: true,
        target: "chrome58",
        outDir: resolve(__dirname, `../../${commonDistFolder}`),
        rollupOptions: {
            input: files,
            output: {
            }
        },
    },
    server: {
        port: 8080
    }
}
