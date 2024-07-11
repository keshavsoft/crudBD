import { defineConfig, normalizePath, build } from 'vite'
import path, { resolve } from 'path'
import { fileURLToPath } from 'url';
import nunjucks from 'vite-plugin-nunjucks';
import { viteStaticCopy } from 'vite-plugin-static-copy';

import { StartFunc as StartFuncGetFiles } from "./CustomTableName/getFiles.js";
import { StartFunc as StartFuncGetVariables } from "./CustomTableName/getVariables.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SrcFolder = "src";

// AllTables
// FirstTable
// <your table Name>
const BuildType = "CustomerNames";

const FrontEndLastName = BuildType;

const FrontEndSrcFolder = `${SrcFolder}/FrontEnd/TableNameSingle`;
const FrontEndDistFolder = `publicDir/bin`;

const root = resolve(__dirname, `../../${FrontEndSrcFolder}`);

let files = StartFuncGetFiles({ inRootFolder: FrontEndSrcFolder });

build({
    configFile: false,
    build: {
        emptyOutDir: false,
        outDir: resolve(__dirname, `../../${FrontEndDistFolder}/assets/compiled/js`),
        lib: {
            name: 'app',
            formats: ['umd'],
            fileName: 'app',
            entry: './src/FrontEnd/assets/js/app.js',
        },
        rollupOptions: {
            output: {
                entryFileNames: '[name].js'
            }
        }
    },
});

export default defineConfig((env) => ({
    publicDir: 'static',
    base: './',
    root,
    plugins: [
        viteStaticCopy({
            targets: [
                { src: normalizePath(resolve(__dirname, `../../${SrcFolder}/FrontEnd/assets/static`)), dest: "assets" },
                { src: normalizePath(resolve(__dirname, `./${FrontEndSrcFolder}/assets/compiled/fonts`)), dest: 'assets/compiled/css' },
                { src: normalizePath(resolve(__dirname, "./node_modules/bootstrap-icons/bootstrap-icons.svg")), dest: 'assets/static/images' }
            ],
            watch: {
                reloadPageOnChange: true
            }
        }),
        nunjucks({
            templatesDir: root,
            variables: StartFuncGetVariables({ mode: env.mode, inFilesArray: files, inBuildType: BuildType }),
            nunjucksEnvironment: {
                filters: {
                    containString: (str, containStr) => {
                        if (!str.length) return false
                        return str.indexOf(containStr) >= 0
                    },
                    startsWith: (str, targetStr) => {
                        if (!str.length) return false
                        return str.startsWith(targetStr)
                    }
                }
            }
        })
    ],
    resolve: {
        alias: {
            '@': normalizePath(resolve(__dirname, 'src')),
            '~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
            '~bootstrap-icons': resolve(__dirname, 'node_modules/bootstrap-icons'),
            '~perfect-scrollbar': resolve(__dirname, 'node_modules/perfect-scrollbar'),
            '~@fontsource': resolve(__dirname, 'node_modules/@fontsource'),
        }
    },
    build: {
        emptyOutDir: false,
        manifest: true,
        target: "chrome58",
        outDir: resolve(__dirname, `../../${FrontEndDistFolder}/${FrontEndLastName}`),
        rollupOptions: {
            input: files,
            output: {
            }
        },
    }
}));