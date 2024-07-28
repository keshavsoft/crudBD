import jwt from 'jsonwebtoken';

let StartFunc = ({ inObject }) => {
    var token = jwt.sign(inObject, 'KeshavSoft');
    
    return token;
}

export { StartFunc }