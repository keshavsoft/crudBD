import jwt from "jsonwebtoken";

const StartFunc = ({ inResponceData }) => {
    let localUserName = inResponceData.UserName;
    let localPassword = inResponceData.Password;
    let localid = inResponceData.id;
    // let secretKey = process.env.KS_TOKEN_FORLOGIN;

    const secretKey = "keshavsoft";
    let LocalReturnObject = { KTF: false }

    const payload = {
        userId: localid,
        username: localUserName
    };
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
    LocalReturnObject.KTF = true;
    LocalReturnObject.token = token;
    return LocalReturnObject;

};

export { StartFunc };