import express from 'express';

import packageJSON from '../../package.json' assert {type: 'json'};
import configJSON from '../../binV4/Config.json' assert {type: 'json'};

var router = express.Router();

router.get('/version', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Accept,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.end(packageJSON.version);
});

router.get('/AboutUs', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Accept,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.end("KeshavSoft : 9848163021");
});

router.get('/DataPk', (req, res) => {
    res.end(configJSON.jsonConfig.DataPk.toString());
});

export { router };