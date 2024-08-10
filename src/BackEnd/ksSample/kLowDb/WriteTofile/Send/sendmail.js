import nodemailer from "nodemailer";
import dotenv from 'dotenv';

dotenv.config();

let StartFunc = async ({ inMail, inlink }) => {
    if ("KS_MAIL_ID" in process.env === false) {
        console.log("KS_MAIL_ID not found in .env file");
        return await false;
    };

    if ("KS_MAIL_PASSWORD" in process.env === false) {
        console.log("KS_MAIL_PASSWORD not found in .env file");
        return await false;
    };

    return await jFTransporter.sendMail({
        from: `"Computer" ${process.env.KS_MAIL_ID}`,
        to: `${inMail}`,
        subject: "Hello ✔",
        text: "To activate click on this",
        html: `<h3>To activate <h1><a href=${inlink}>Click here</a></h1></h3>`,
    });
}

let jFTransporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.KS_MAIL_ID,
        pass: process.env.KS_MAIL_PASSWORD,
    },
});

export { StartFunc };