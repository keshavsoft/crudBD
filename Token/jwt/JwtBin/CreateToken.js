import jwt from 'jsonwebtoken';

let StartFunc = ({ inObject }) => {
    var token = jwt.sign(inObject, 'KeshavSoftBin');

    return token;
}

export { StartFunc };