// import { router as routerFromSrc } from "./src/routes.js";
import { router as routerFromBin } from "./bin/routes.js";
import { router as routerFrombinSecured } from "./binSecured/routes.js";
import { router as routerForUtility } from "./Utility/routes.js";
import { router as routerFromCommon } from "./Common/routes.js";
import { router as routerFromCustom } from "./Custom/routes.js";
import { router as routerFromLogin } from "./Login/routes.js";

import { router as routerFromBinV2 } from "./binV2/routes.js";
import { router as routerFromBinV3 } from "./binV3/routes.js";
import { router as routerFromBinV4 } from "./binV4/routes.js";

import { StartFunc as StartFuncPortListen } from "./PortListen.js";

import { StartFunc as MiddleWaresBinSecured } from "./MiddleWares/MiddleWares.binSecured/EntryFile.js";
import { StartFunc as StartFuncKWSServer } from "./Projects/KWSServer/EntryFile.js";

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

// app.disable('x-powered-by');

app.use(cookieParser());

app.use(express.json({ limit: '100mb' }));

app.use('/', express.static(path.join(path.resolve(), 'public')));

app.get("/k1", (req, res) => {
    res.sendFile("./checkMail.html");
})

// app.use('/src', routerFromSrc);
app.use('/bin', routerFromBin);
app.use('/binSecured', MiddleWaresBinSecured, routerFrombinSecured);

app.use('/binV2', routerFromBinV2);
app.use('/binV3', MiddleWaresBinSecured, routerFromBinV3);
app.use('/binV4', routerFromBinV4);

app.use('/utility', routerForUtility);
app.use('/Common', routerFromCommon);
app.use('/Custom', routerFromCustom);
app.use('/Login', routerFromLogin);

StartFuncKWSServer(server);

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
