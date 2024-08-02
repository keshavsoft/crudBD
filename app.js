// import { router as routerFromSrc } from "./src/routes.js";
import { router as routerFromBin } from "./bin/routes.js";
import { router as routerFrombinSecured } from "./binSecured/routes.js";
import { router as routerForUtility } from "./Utility/routes.js";
import { router as routerFromCommon } from "./Common/routes.js";
import { router as routerFromCustom } from "./Custom/routes.js";
import { router as routerFromLogin } from "./Login/routes.js";

import { StartFunc as StartFuncPortListen } from "./PortListen.js";

import { StartFunc as MiddleWaresBinSecured } from "./MiddleWares/MiddleWares.binSecured/EntryFile.js";

import packageJSON from './package.json' assert {type: 'json'};

import express from 'express';
import http from 'http';
import path from 'path';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
global.__basedir = path.dirname(__filename);

const app = express();
const server = http.createServer(app);

var port = normalizePort(process.env.PORT || '7019');

app.disable('x-powered-by');

app.use(cookieParser());

app.use(express.json({ limit: '100mb' }));

app.use('/', express.static(path.join(path.resolve(), 'public')));

app.get('/Version', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Accept,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.end(packageJSON.version);
});

app.get('/AboutUs', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Accept,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.end("KeshavSoft : 9848163021");
});

// app.use('/src', routerFromSrc);
app.use('/bin', routerFromBin);
app.use('/binSecured', MiddleWaresBinSecured, routerFrombinSecured);
app.use('/utility', routerForUtility);
app.use('/Common', routerFromCommon);
app.use('/Custom', routerFromCustom);
app.use('/Login', routerFromLogin);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
};

server.listen(port, StartFuncPortListen);
