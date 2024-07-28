import jwt from 'jsonwebtoken';

let StartFunc = ({ inToken }) => {
    try {
        let jVarTokenInfo = jwt.verify(inToken, 'KeshavSoft');
        
        return jVarTokenInfo;
    }
    catch (err) {
        return false;
    }
}

export { StartFunc };