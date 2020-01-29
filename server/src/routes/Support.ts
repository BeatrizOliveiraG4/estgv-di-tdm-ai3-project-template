
import { Request, Response, Router } from 'express';
import { INTERNAL_SERVER_ERROR, OK } from 'http-status-codes';
import { buildApiErrorMessage } from '../shared/index';

const router = Router();

/**
 * Send email on behalf of the logged in user
 * @param req Request
 * @param res Response
 */
async function handleCreateSupportTicket(req: Request, res: Response) {
    // TODO: Handle creation of a support ticker => Just send email via SendGrid to admin

    const supportRequest = req.body as Api.SendEmailRequest;
    const toEmail = process.env.ADMIN_SUPPORT_EMAIL as string;

    try {
        const resSendEmail = await sendEmail(
            supportRequest.from,
            toEmail,
            supportRequest.subject,
            supportRequest.message);
        res.status(OK);
    } catch (err) {
        res.status(INTERNAL_SERVER_ERROR)
    }
    // Register routes
    router.post('/', handleCreateSupportTicket);
}
export default router;