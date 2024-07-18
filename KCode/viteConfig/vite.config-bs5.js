import { defineConfig, normalizePath, build } from 'vite';
import handlebars from 'vite-plugin-handlebars';
// import ConfigJson from '../../bin/Config.json' with {type: 'json'};

import path, { resolve } from 'path';
import { fileURLToPath } from 'url';

import { StartFunc as getFilesForVite } from "./getFilesForVite.js";
import { StartFunc as getFilesForHbs } from "./getFilesForHbs.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const commonSrcFolder = "src/Index/FrontEnd";
const commonDistFolder = "public";

let filesForVite = getFilesForVite({ inSrcPath: commonSrcFolder });
let filesForHbs = getFilesForHbs({ inSrcPath: commonSrcFolder });

const pageData = {
    '/index.html': {
        Title: 'Keshav',
    },
    '/dashboard.html': {
        Title: 'Keshav',
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
                return filesForHbs[pagePath];
            },
        }),
    ],
    build: {
        emptyOutDir: false,
        manifest: true,
        target: "chrome58",
        outDir: resolve(__dirname, `../../${commonDistFolder}`),
        rollupOptions: {
            input: filesForVite,
            output: {
            }
        },
    },
    server: {
        port: 8080
    }
}
