import path from 'path';
import archiver from 'archiver';
import fs from 'fs';

import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// import configJson from '../../../../src/BackEnd/Config.json' assert { type: 'json' };
import configJson from '../../../../bin/Config.json' assert { type: 'json' };

const LocalDataPath = `../../../../${configJson.jsonConfig.DataPath}`;

let GetFunc = ({ inResponse, callback }) => {

    let LocalUserPK = configJson.jsonConfig.DataPk;

    if (LocalUserPK > 0) {
        var output = fs.createWriteStream(`${LocalUserPK}.zip`);

        var archive = archiver('zip', {
            zlib: { level: 9 },
            forceLocalTime: true
        });

        archive.pipe(output);

        archive.on('error', function (err) {
            inResponse.status(500).send({ error: err.message });
        });

        //on stream closed we can end the request
        archive.on('end', function () {
            console.log('Archive wrote %d bytes', archive.pointer());
            //console.log('output', output);
            callback(archive.pointer(), null);
        });

        //set the archive name
        inResponse.attachment(`${LocalUserPK}.zip`);

        //this is the streaming magic
        archive.pipe(inResponse);

        var directories = [path.resolve(__dirname, `${LocalDataPath}/${LocalUserPK}`)];

        for (var i in directories) {
            archive.directory(directories[i], directories[i].replace(__dirname, ''));
        }

        archive.finalize();
    };
};

export { GetFunc };