import { format } from "path";
/**
* @param format
* @param toString
* @param subject
* @param message
*/

function sendEmail(
    from: string,
    to: string,
    subject: string,
    message: string) {

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to,
        from,
        subject,
        text: message,
        html: message,
    };
    return sgMail.send(msg);

}