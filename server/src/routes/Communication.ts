
import { Request, Response, Router } from 'express';
import { INTERNAL_SERVER_ERROR, ACCEPTED } from 'http-status-codes';
import { buildApiErrorMessage } from '../shared/index';

const router = Router();

/**
 * Send email on behalf of the logged in user
 * @param req Request
 * @param res Response
 */
async function handleSendEmail(req: Request, res: Response) {
    // TODO: Handle sending of email via SendGrid
    const supportRequest = req.body as Api.SendEmailRequest;
    const fromEmail = supportRequest.from || req.user.email;

    try {
        const resSendEmail = await sendEmail(
            fromEmail,
            supportRequest.to,
            supportRequest.subject,
            supportRequest.message);
        res.status(ACCEPTED);
    } catch (err) {
        res.status(INTERNAL_SERVER_ERROR)
    }
}
// Register routes
router.post('/send_email', handleSendEmail);

export default router;