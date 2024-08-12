import fs from 'fs-extra';

let StartFunc = ({ inTo, inFrom }) => {
    let LocalFrom = inFrom;
    let LocalTo = inTo;
    let LocalFolderNameToCopy = "kSequelize";

    try {
        fs.cpSync(`${LocalFrom}/${LocalFolderNameToCopy}`, `${LocalTo}/${LocalFolderNameToCopy}`, {
            recursive: true,
        });
    } catch (error) {
        console.log(error.message);
    };
};

export { StartFunc };