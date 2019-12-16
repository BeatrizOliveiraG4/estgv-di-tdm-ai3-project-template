import { Router } from 'express';
import UserRouter from './Users';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/users', UserRouter);

router.post('/sendmail'/*, checkJwt*/, (req, res) => {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = req.body; // TODO: Validar
 
//   to: 'beatrizpintooliveira@hotmail.com',
//   from: 'test@example.com',
//   subject: 'Sending with Twilio SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };

    sgMail.send(msg)
        .then(resSg => res.status(202))
        .catch(err => res.status(500).json({ message: err.message }));
    
})
// Export the base-router
export default router;
