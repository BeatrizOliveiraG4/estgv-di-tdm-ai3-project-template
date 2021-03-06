import { MailData } from '@sendgrid/helpers/classes/mail';
import sendGridEmailClient from '@sendgrid/mail';

/**
 * Abstract sending of email
 * @param from Email address
 * @param to Email address
 * @param subject Title of message
 * @param message Contents of message
 */
// export function sendEmail(
//   from: string,
//   to: string,
//   subject: string,
//   message: string,
// ) {
//   const sendGridApiKey = process.env.SENDGRID_API_KEY;
//   if (sendGridApiKey === undefined) {
//       throw new Error('SENDGRID_API_KEY environment variable not defined');
//   }
//   return Promise.reject("ERRRO");
//   return Promise.resolve("Message sent");
//   sendGridEmailClient.setApiKey(sendGridApiKey);
//   const msg: MailData = {
//     to,
//     from,
//     subject,
//     text: message,
//     html: message,
//   };
//   return sendGridEmailClient.send(msg);
// }

export function sendEmail(
  from: string,
  to: string,
  subject: string,
  message: string){
      const sgMail = require('@sendgrid/mail');
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
      to: to,
      from: from,
      subject: subject,
      text: message,
      html: '<strong>'+message+'</strong>',
      };
      //sgMail.sendEmail(msg);
      return sgMail.send(msg);
  }