
import { buildApiErrorMessage } from '@shared';
import { Request, Response, Router } from 'express';
import { INTERNAL_SERVER_ERROR, ACCEPTED } from 'http-status-codes';
import { checkJwt, buildAuthenticationClient, buildManagementClient } from '../auth0';

const router = Router();

/**
 * Get user profile info
 * @param req Request
 * @param res Response
 */
async function handleGetUserProfile(req: Request, res: Response) {
    // TODO: Handle user password change via Auth0 Auth API
    //const authClient = buildAuthenticationClient();

    res.status(INTERNAL_SERVER_ERROR)
        .json(buildApiErrorMessage('Not implemented'));
}

/**
 * Change user password
 * @param req Request
 * @param res Response
 */
async function handleChangeUserPassword(req: Request, res: Response) {

    const passRequest = req.body as Api.IChangePasswordRequest;
    
    try{
        const authClient = buildAuthenticationClient();
        await authClient.requestChangePasswordEmail({
            email: passRequest.email,
            connection: 'Username-Password-Authentication'
        })
        //res.status(200);
        res.status(ACCEPTED).json({ message: "Enviado"});
    } catch(err) {
      res.status(INTERNAL_SERVER_ERROR)
        .json(buildApiErrorMessage(err.message));
    }
}

/**
 * Authenticate user
 * @param req Request
 * @param res Response
 */
async function handleUserLogin(req: Request, res: Response) {
    // TODO: Handle user login via Auth0 API
    res.status(INTERNAL_SERVER_ERROR)
        .json(buildApiErrorMessage('Not implemented'));
}

/**
 * Register a new user
 * @param req Request
 * @param res Response
 */
async function handleUserRegistration(req: Request, res: Response) {
    // TODO: Handle user registration via Auth0 Auth API
    res.status(INTERNAL_SERVER_ERROR)
        .json(buildApiErrorMessage('Not implemented'));
}

/**
 * Logout a user
 * @param req Request
 * @param res Response
 */
async function handleUserLogout(req: Request, res: Response) {
    // TODO: Handle user logout via Auth0 Auth API
    res.status(INTERNAL_SERVER_ERROR)
        .json(buildApiErrorMessage('Not implemented'));
}

/**
 * Update user preferences
 * @param req Request
 * @param res Response
 */
async function handleUpdateUserPreferences(req: Request, res: Response) {
    // TODO: Update user preferences via Auth0 MgmtAPI (user_profile.user_metadata)
    res.status(INTERNAL_SERVER_ERROR)
        .json(buildApiErrorMessage('Not implemented'));
}

router.get('/profile', handleGetUserProfile);
router.put('/preferences', checkJwt, handleUpdateUserPreferences);
router.post('/change_password', handleChangeUserPassword);
router.post(`/register`, handleUserRegistration);
router.post(`/login`, handleUserLogin);
router.get(`/logout`, checkJwt, handleUserLogout);

export default router;
